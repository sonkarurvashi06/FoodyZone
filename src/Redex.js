import React from "react";
const Redex = (props) => {
     console.log(props.data.name)
    const {data}=props
  return (
    <div>
          <h1>user component</h1>
          <h1>{data.name}</h1>
          <h1>{data.age }</h1>
    </div>
  );
};
export default Redex;

