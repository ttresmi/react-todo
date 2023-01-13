import React from "react"

const Todos=({text ,each,todos,setTods})=>{
    const deleteHandler=()=>{
      setTods(todos.filter(e=>e.id!==each.id))
    }
    const completedHandler=()=>{
        setTods(todos.map(item=>{
            if(item.id===each.id){
                return {...item,completed:!item.completed}
            }
            return item
        }))
    }
    return(
        <div className="todo-container">
            <li className={`${each.completed?"complted":""}`}>{text}</li>
            <button><i className="fa fa-check" onClick={completedHandler}></i></button>
            <button><i className="fa fa-trash" onClick={deleteHandler}></i></button>
        </div>
    );
}
export default Todos;