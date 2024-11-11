function Child(props)
{
    const data = {name:'urvsahi sonkar',email:'urvashi@456',contact:8676}
    return (
        <div className="urvsgi mee">
            <h2>Child component</h2>
         <button onClick={()=>props.alert(data)}>Click me</button>

        </div>




    )




}
export default Child;