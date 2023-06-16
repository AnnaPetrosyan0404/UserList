import "./Futter.css"
import google from "../aseets/img/google.svg"
import facebook from "../aseets/img/facebook.svg"
import twiter from "../aseets/img/twiter.svg"
import linkedin from "../aseets/img/linkedin.svg"
import telegram from "../aseets/img/telegram.svg"

function Futter(){
    return(
      <footer className="conteiner-futter">
        <nav className="conteiner-futter-content">
        <ul className="conteiner-futter-content-icon">
            <img src={google} alt="google"></img>
        </ul>
        <ul className="conteiner-futter-content-socSetimg">
            <li>home</li>
            <li>userList</li>
            <li>contact</li>
            <li>login</li>
        </ul>
        <ul className="conteiner-futter-content-text">
        <img src={linkedin} alt="linkedin"></img>
        <img src={facebook} alt="facebook"></img>
        <img src={telegram} alt="telegram"></img>
        <img src={twiter} alt="twiter"></img>
        </ul>
        </nav>
      </footer>
    )
}

export default Futter

