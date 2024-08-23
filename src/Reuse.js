import React from "react";
import Users from './Users';
import "./Reuse.css";
function Reuse() {
    const users = [
      { name: "urvi", email: "urvashi@345", contact: "45678" },
      { name: "shreya", email: "shreya@345", contact: "3455" },
    ];
    return (
        <div className="Reuse">
            <h1>reuse component</h1>
            
            {
                users.map((item, i) =>
                    <Users data = {item}/>
                    
                )
            }

        </div>



    )

}
export default Reuse;