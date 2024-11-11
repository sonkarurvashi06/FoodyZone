import React,{useRef} from 'react'
//import React ,{useRef} from 'react'
////import Forward from "./Forward";
function Code() {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)
    // let inputRef3=  useRef(null)
    function submitForm(e){
    
        e.preventDefault()
        console.warn("log field1 :", inputRef.current.value)
        console.warn("log field2 :", inputRef2.current.value)
        // console.warn("log field3:", inputRef3.current.value);
        let input3 = document.getElementById('input3'),value
        console.warn("input warm value:",input3)
    }
    return (
      <div className="code">
        <h1>uncontrolled component</h1>
        <form onSubmit={submitForm}>
          <input ref={inputRef} type="text" /> <br />
          <br />
        <input ref={inputRef2} type="text" /> <br /> <br />
        <input id ="input3" type="text"/>  <br/> <br/>    
          <button>uncontrolled btn</button>
        </form>
      </div>
    );

}

    
export default Code;