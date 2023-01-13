import React from "react"
// function Form(){
//     return(
//         <div>

//         </div>
//     );
// }

const Form =({inputText,setInputText,todos,setTods,status,setStatus})=>{
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
    }
    const todoHandler=(e)=>{
        e.preventDefault();
        setTods([...todos,{text:inputText,completed:false,id:Math.random()}])
        setInputText("");

    }
    const statusHandler=(e)=>{
        setStatus(e.target.value)

    }
    return(
        <form>
            <input 
            value={inputText}
            type="text" onChange={inputTextHandler}/>
            <button type="submit" onClick={todoHandler}>
            <i className="fa fa-plus-square"></i>
            </button>
            <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="c">Completed</option>
                <option value="uc">UnCompleted</option>
            </select>

        </form>
       
    )
}
export default Form;