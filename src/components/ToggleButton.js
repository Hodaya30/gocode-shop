import { useState } from "react";

 function ToggleButton(){
const [status, setStatus]= useState(true);
return(
    <>
    {status && <h1>Hello togglebutton</h1> }
    <button onClick={()=>{setStatus(!status)}}>
    Click
    </button>
    </>


);

}
export default ToggleButton;
