import React,{useState} from "react"
import './App.css';
import Form from './components/Form.js'
import TodoList from './components/todoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTods]=useState([]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTods={setTods}/>
      <TodoList  todos={todos}/>
    </div>
  );
}

export default App;
