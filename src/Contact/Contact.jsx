import Futter from "../Futter/Futter";
import Headers from "../Headers/Headers"
import "./Contact.css"

function Contact(){
    return(
        <div className="contcat">
            <Headers/>
            <div className="conteiner-contact">
          
                 
        </div> 
        <div className="ilonmask">
        <div className="img" >
<img  height={250} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"alt="..."></img>
    </div>
    <div className="img1">
            <h1>Ilon     Mask</h1>
            <p>@ilonmask.mail.ru</p>
            <p>Armenia</p>
            <p>+374 77 55 88 00</p>
        </div>
        </div>
            <Futter/>
        </div>
    )
}

export default Contact;