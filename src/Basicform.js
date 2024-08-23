
import React,{useState} from 'react'
function Basicform() {
    const [name, setname] = useState("")
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    
    function getFormData(e)
    {
        console.log(name,tnc,interest)
        e.preventDefault()
        // console.log(e);
        // console.log(e.target);
        console.log({name,tnc,interest})
     
    }
    const handleNameChange = (e) => {

        console.log(e.target.value)
        setname(e.target.value)
    }
    return (
        <div className="Basicform">
            <h1>handle in forms</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="name" onChange={ (e) => {

        console.log(e.target.value)
        setname(e.target.value)
    }}  /><br /><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>book</option>
                    <option>car</option>
                    <option>book</option>
                    <option>node</option>    
                    <option>bags</option>
                   

                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><spam>Accept terms and condition</spam>
                <button type="submit">Submit</button> <br /><br />
                <button>Clear</button>
            </form>
        </div>



    );



}
export default Basicform