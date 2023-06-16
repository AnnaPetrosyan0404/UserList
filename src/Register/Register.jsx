import { useState } from "react";
import "./Register.css";

function Register({setpasswordLogin,passwordLogin,setBooleanTrue,setglobalState,globalState,booleanTrue}){
    const[loginAdd,setloginAdd]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    function click(){
        setpasswordLogin([
            ...passwordLogin,
            {
                login:loginAdd,
                password:password,
                email:email,
            }
    ])
    setglobalState(!globalState)
    setBooleanTrue(!booleanTrue)
    }
console.log(passwordLogin)
    return(
        <div className="conteiner-Register">
           <div className="conteiner-Register-content">
            
            <div> 
                <input  onChange={(e)=>setloginAdd(e.target.value)}placeholder="Login" ></input>
            </div>
            <div>
                <input  onChange={(e)=>setPassword(e.target.value)}placeholder="Password" ></input>
            </div>
            <div>
                <input  onChange={(e)=>setEmail(e.target.value)}placeholder="Email" ></input>
            </div>
            <div>
                <button onClick={click}>Registratia</button>
            </div>
           </div>
           
        </div>
    )
}
export default Register