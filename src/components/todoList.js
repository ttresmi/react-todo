import React from "react"
import Todos from "./Todos";
// function TodoList(){
//     return(
//         <div>

//         </div>
//     )
// }
 const TodoList=({todos})=>{
    return(
        <div>
            <ul>
              { 
            todos.map((e)=>(
                <Todos text={e.text}/>
            ))

              }
            </ul>

        </div>
    )
 }

 export default TodoList;