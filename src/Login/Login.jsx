import { useState } from "react"
import "./Login.css"
import UserList from "../UserList/UserList"
import Home from "../Home/Home"
import Register from "../Register/Register"


function Login(){
    const[login,setLogin]=useState("")
    const[password,setPassword]=useState("")
    const [booleanTrue,setBooleanTrue]=useState(true)
    const[globalState,setglobalState]=useState(true)
    const[passwordLogin,setpasswordLogin]=useState([
        {
            email:"14",
            password:"2023",
            login:"GYUMRI",
        },
        {
            email:"14",
            password:"2023",
            login:"EREVAN",
        }
    ])
    function Clickmy(){
        passwordLogin.map((item)=>{
            if (login===item.login&& password===item.password){
                setBooleanTrue(false)   
    
            }
        }
    
    )
    }
    function clickmy1(){
        setglobalState(!globalState)
    }
    return(
    <> 
   {
    globalState? 
    booleanTrue ? <div className="login-conteiner">
            <div>
                <div>
                <input  type="text"placeholder="Login" onChange={(event)=>{setLogin(event.target.value)}}/>
                </div>
               
                <div>
                <input type="password" placeholder="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
                <div className="button2">
                <button onClick={Clickmy}>butoon</button>
                <button onClick={clickmy1}>Registratia</button>
                </div>
            </div>
        </div>:
     <Home/>  
     :<Register
        passwordLogin={passwordLogin}
        setpasswordLogin={setpasswordLogin}
        booleanTrue={booleanTrue}
        setBooleanTrue={setBooleanTrue}
        globalState={globalState}
        setglobalState={setglobalState}


     /> 
     }
</>
    )
}
export default Login


