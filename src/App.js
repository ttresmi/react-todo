import React,{useState,useEffect} from "react"
import './App.css';
import Form from './components/Form.js'
import TodoList from './components/todoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTods]=useState([]);
  const [status,setStatus]=useState("all");
  const [filtteredTodos,setFiltterdTodos]=useState([]);
  useEffect(()=>{
    filterHandeler();
  },[status,todos])

  const filterHandeler=()=>{
    switch (status){
      case "c":
        console.log("**********>>",todos)
        setFiltterdTodos(todos.filter((e=>e.completed)));
        break;
        case "uc":
          console.log("**********>>",todos.completed)
        setFiltterdTodos(todos.filter((e=>!e.completed)));
        break;
        default:
          setFiltterdTodos(todos);
          break;

    }
  }
  return (
    <div className="App">
      <header>Todo App</header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTods={setTods} status={status} setStatus={setStatus}/>
      <TodoList  todos={todos} setTods={setTods} filtteredTodos={filtteredTodos}/>
    </div>
  );
}

export default App;
// npm run deploy