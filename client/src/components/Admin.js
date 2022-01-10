
import React, { useState,useEffect } from 'react';
import MaterialTable from 'material-table'
import AppBarCom from './AppBarCom/AppBarCom';
import * as ReactBootStrap from "react-bootstrap";


function FullFeaturedCrudGrid() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetch("/api/products")
        .then(res => {
          return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(true);
         
        });
    }, []);
  

  const columns = [
    { title: "ID", field: "_id", editable: false },
    { title: "Title", field: "title" },
    { title: "Price", field: "price" },
    { title: "Description", field: "description", },
    { title: "Category", field: "category", },
    {title: "Image", field: "image", render: item => <img src={item.image} alt="" border="3" height="100" width="100" />},

  ]


  return (
    <div className="App">
     <AppBarCom/>


     {loading ? ( <MaterialTable style={{
    paddingTop: '90px',
  }}
        title="Products Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            fetch('/api/products', {
                 method: 'POST',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                          },
                     body: JSON.stringify({...newRow}),
         }).then((res)=>res.json()).then(({_id,title,price,description,category,image}) =>{setData([{_id,title,price,description,category,image},...data]);},
         );
         setTimeout(() => {
          setData([newRow,...data])
          resolve()
        }, 2000)
           
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const id=selectedRow._id;
            fetch(`/api/products/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(selectedRow)
          })
          .then(response => {
              return response.json( )
          })
          .then(data => 
              // this is the data we get after doing the delete request, do whatever you want with this data
              console.log(data) 
          );
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const id=oldRow._id;
            console.log(id)
            fetch(`/api/products/${id}`, {
              method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedRow)
            })
            .then(response => {
                return response.json( )
            })
            .then(data => 
                // this is the data we get after putting our data, do whatever you want with this data
                console.log(data) 
            );
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      /> ) : (
        <div className="spinner">
          <ReactBootStrap.Spinner animation="border" role="status" />
        </div>
      )}



     
    </div>
  );
}

export default FullFeaturedCrudGrid;
