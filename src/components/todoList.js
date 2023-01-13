import React from "react"
import Todos from "./Todos";
// function TodoList(){
//     return(
//         <div>

//         </div>
//     )
// }
 const TodoList=({todos,setTods})=>{
    return(
        <div>
            <ul className="todo-list">
              { 
            todos.map((e)=>(
                <Todos text={e.text} each={e} todos={todos} setTods={setTods}/>
            ))

              }
            </ul>

        </div>
    )
 }

 export default TodoList;