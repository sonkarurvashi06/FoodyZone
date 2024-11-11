import React from "react"
const Redex2 = (props) => {
    // console.log(props.data.name)
    // console.log(props.data.age);
    const {data } =props
    return (
      <div>
        <h1>redex2</h1>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
      </div>
    );    


}
export default Redex2

