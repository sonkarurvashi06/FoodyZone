import React from 'react'
class User2 extends React.Component {
    constructor()
    {
    
        super();
        this.state={
            email:"anil@test.com"


        }
        




    }
    render()
    {
        console.log("Render method",this.state.email)
        return (
            <div>
                <div>User Component</div>
                <button onClick={()=>this.setState({email:"sonkar"})}>update email address</button>



            </div>
            




        )


    }
}
export default User2;













