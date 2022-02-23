import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos/'
  
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJson = await response.json()
    setTodos(responseJson)
  }

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      Hola mUndo
      {!todos ? 'Cargando...' :
        todos.map((todo, index)=>{
          return <li key={index}>{todo.title} - {todo.completed ? 'OK':'X'}</li>
        })
      }
    </div>
  );
}

export default App;
