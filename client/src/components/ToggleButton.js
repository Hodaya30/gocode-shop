import { useState } from "react";

 function ToggleButton(){
const [status, SetStatus]= useState(false);
return(
    <>
    {status && <h1>Hello togglebutton</h1> }
    <button onClick={()=>{SetStatus(!status)}}>
    Click
    </button>
    </>


);

}
export default ToggleButton;
