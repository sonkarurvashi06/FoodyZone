
import React,{useState} from "react"
function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [useErr, setuseErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    function loginHandle(e)
    {
        if (user.length < 3 || password.length < 3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all goods")


        }
        e.preventDefault()



    }
    function useHandler(e){
    let item = e.target.value;
        if (item.length < 3)
        {
            // console.log("invalid function")
            setuseErr(true)

        }
        else 
        {
            setuseErr(false)



        }
        setUser(item)
      console.log(e.target.value.length)


    }
    function usePassword(e) {
      let item = e.target.value;
      if (item.length < 3) {
        // console.log("invalid function")
        setPassErr(true);
      }
      else
      {
        setPassErr(false);
        }
        setPassword(item)
      console.log(e.target.value.length);
    }


    
        return (
            <div>
                <h1>login</h1>
                <form onSubmit={loginHandle}  >
                    <input type="text" placeholder="enter user name" onChange={useHandler} />{useErr?<span>user not valid</span>:""}
                    <br /> <br />
                    <input type="text" placeholder="enter password"  onChange={usePassword} />{passErr?<span>pass not valid</span>:""} 
                    <br /> <br />
                    <button type="submit">login</button>
                </form>
            </div>
        );



    }

export default Login