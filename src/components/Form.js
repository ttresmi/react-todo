import React from "react"
// function Form(){
//     return(
//         <div>

//         </div>
//     );
// }

const Form =()=>{
    return(
        <form>
            <input type="text"/>
            <button type="submit">
            <i className="fa fa-plus-square"></i>
            </button>
            <select>
                <option value="all">All</option>
                <option value="c">Completed</option>
                <option value="uc">UnCompleted</option>
            </select>

        </form>
    )
}
export default Form;