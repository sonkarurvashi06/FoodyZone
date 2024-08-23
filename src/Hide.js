import React from "react";
function Hide() {
  const [status, setStatus] = React.useState(true);
  return (
    <div class="Hide">
          {
              status ? <h1>hello urvasji</h1> : null}

      {/* <button onClick={()=>setState(false)}>Hide</button> */}
      {/* <button onClick={()=>setState(true)}>show</button> */}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}
export default Hide;
