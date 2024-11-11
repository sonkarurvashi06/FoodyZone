
import React, {useRef,useState} from'react'

function Code2() {
    return (
      <div className="code">
        <h1>HOC </h1>
            <HOC cmp={Component } />
      </div>
    );
}
function HOC(props) {
    console.log(props)
    return <h2>{<props.cmp/> }</h2>


}
function Component()
{
const[count,setCount]=useState(0)
    return <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>update</button>
        


</div>


}
export default Code2;