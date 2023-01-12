import React from "react"

const Todos=({text})=>{
    return(
        <div>
            <li>{text}</li>
            <button><i className="fa fa-check"></i></button>
            <button><i className="fa fa-trash"></i></button>
        </div>
    );
}
export default Todos;