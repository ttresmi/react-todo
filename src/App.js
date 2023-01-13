import React,{useState} from "react"
import './App.css';
import Form from './components/Form.js'
import TodoList from './components/todoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTods]=useState([]);
  const [status,setStatus]=useState("all")
  return (
    <div className="App">
      <header>Todo App</header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTods={setTods} status={status} setStatus={setStatus}/>
      <TodoList  todos={todos} setTods={setTods}/>
    </div>
  );
}

export default App;
