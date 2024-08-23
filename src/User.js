
import React,{useState} from "react";
function User() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false);
  function getData(val)
  {
  
    console.log(val.target.value)
    setData(val.target.value);

}
    
    
    
    return (
            
      <div className="User">
        {
          print?
            <h1>{data}</h1>
            :null

          
          
        }
        <h1>{data }</h1>
        <input type="text" onChange={getData} />
        <button onClick={()=>setPrint(true)}>print Data</button>
        </div>
    )
        
    

}
export default User;
