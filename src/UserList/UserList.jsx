import { useEffect, useState } from "react"
import "./UserList.css";
import Headers from "../Headers/Headers";
import Futter from "../Futter/Futter";

function UserList() {
    const [modal,setModal]=useState(true)
    const [name,setName]=useState("")
    const [lastname,setlastname]=useState("")
    const [age,setage]=useState("")
    const [email,setemail]=useState("")
    const [sity,setsity]=useState("")

    const [user,setUser]=useState(
        [
            {
                id:1,
                name:"Davit",
                lastname:"Petrosyan",
                age:14.1,
                email:"@Davitpetrosyan.gmail",
                sity:"Basen"
        
            },
            {
                id:2,
                name:"Jon",
                lastname:"Smityan",
                age:35,
                email:"ERTiuygtfYUI",
                sity:"Angly"
        
            },
            {
                id:3,
                name:"Gevorg",
                lastname:"Eranyan",
                age:45,
                email:"ERTYUI",
                sity:"Erevan"
        
            },
            {
                id:4,
                name:"Anna",
                lastname:"Petrosyan",
                age:14,
                email:"wertyuj",
                sity:"Basen"
        
            },
     
        ])
        console.log(user);
    //     const [user,setUser]=useState()
    //     function api(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(json => setUser(json))
    //     }
    //     useEffect(()=>{
    // api()
    //     },[])
    //     console.log(user);
    function click(){
        setUser([
            ...user,
            {
                id:Math.random(),
                name:name,
                lastname:lastname,
                age:age,
                email:email,
                sity:sity,
            }
        ])
        setModal(!modal)
    }
    return (
        <div>
      <div>
        <Headers></Headers>
     
        <div className="conteiner">
        <div className="userlist-center">
            <div className="max-whidth">

            {user.map((item) =>
                <div key={item.id} className="conteiner-userlist">
                    <div className="conteiner-userlist-lastname">
                        <p> {item.name}</p>
                        <p>{item.lastname}</p>
                    </div>
                    <div className="conteiner-userlist-data">
                    <p>{item.age}</p>
                        <p>{item.email}</p>
                        <p>{item.sity}</p></div>
                </div>
              
            )}
               
        <div className="conteiner-add-user-button">
    
            <button onClick={()=>setModal(!modal)}>Add user</button>
          
        </div>
        </div>
            <div className="conteiner-modal">
               {modal? null:<div className="conteiner-modal-content"> 
               <div className="input">
               <input type="text" onChange={(e)=>setName(e.target.value)}></input>
               </div>
             
               <div className="input">
               <input type="text" onChange={(e)=>setlastname(e.target.value)}></input>
               </div>
             
               <div className="input">
               <input type="text" onChange={(e)=>setage(e.target.value)}></input>
               </div>
              
               <div className="input">
               <input type="text" onChange={(e)=>setsity(e.target.value)}></input>
               </div>
              
               <div className="input">
               <input  type="text" onChange={(e)=>setemail(e.target.value)}></input>
               </div>
              
               <button className="button" onClick={click}>userList</button>
               </div>}
            </div>
          
            </div>
            </div>
            <div><Futter></Futter></div>
            </div>
            </div>
    )
}

export default UserList