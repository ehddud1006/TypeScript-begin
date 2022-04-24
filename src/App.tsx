import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/inputFeild';
import { Todo } from './model';
let name:string = "Piyush"
let age:number = 5
let isStudent: boolean
const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputFeild>
    </div>
  );
}

export default App;
