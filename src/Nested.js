import React from "react";
import {Table} from 'react-bootstrap'
function Nested() {
    const user = [
        {
            name: 'urvashi', email: 'urvashi@678', address: [
                { hn: '10', city: 'noida', country: 'india' },
                { hn: '12', city: 'noida', country: 'india' },
            ]
        },
        {
            name: 'shreya', email: 'shreya@3455', address: [
                { hn: '13', city: 'gao', country: 'gao2' },
                { hn: '14', city: 'noida', country: 'india' },
                
            
        ]

        },

        
        ]
        

    
  return (
    <div className="Nested">
      <h1>list with nested array</h1>
      <Table varient="dark" striped>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
                  </tr>
                  </tbody>
        
              {
                  user.map((item) => (
          <tr>
                <td>{item.name }</td>
               <td>{item.email}</td>
              <td>{
                  item.address.map((data) =>
          <tr>
                          <td>{ data.hn}</td>
                          <td>{data.city }</td>
                          <td>{data.country }</td>
                  </tr>)
                          
                          
              }</td> 
                                   
          </tr>
                  ))
              }
              
      </Table>
    </div>
  );
}
export default Nested;
