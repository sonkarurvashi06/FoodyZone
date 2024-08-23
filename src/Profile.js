
import { useState } from "react";
function Profile() {
//1,2,3
    const [loggedIn, setLoggedIn] = useState(2)
    return (
        <div>
            {loggedIn==1? <h1>welcome user1</h1> :loggedIn==2 ?<h1>welcome user2</h1>:<h1>welcome guest</h1>}


        </div>




    )




}



        
        
        
        
        
        



    




export default Profile;