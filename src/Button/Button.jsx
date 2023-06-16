

function Button({title,clickmy,bagkroundcolor}){
    return(
        <div>
            <button onClick={clickmy} style={{backgroundColor:`${bagkroundcolor}`}}>{title} </button>
        </div>
    )
}
export default Button
