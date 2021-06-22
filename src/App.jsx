import { useState, useEffect } from 'react'
import './App.css'
// Components
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  const [input_text, set_input_text] = useState('')
  const [todos, set_todos] = useState([])
  const [status, set_status] = useState('all')
  const [filtered_todos, set_filtered_todos] = useState([])

  useEffect(() => {
    filter_handler()
  }, [todos, status])
  
{
  // const filter_handler = () => {
  //     switch(status) {
  //       case 'completed':
  //         set_filtered_todos(todos.filter(todo => todo.completed === true))
  //         break
  //       case 'uncompleted':
  //         set_filtered_todos(todos.filter(todo => todo.completed === false))
  //         break
  //       default:
  //         set_filtered_todos(todos)
  //         break
  //     }
  // }
}

  const filter_handler = () => {
    return set_filtered_todos(todos.filter(todo => {
      switch(status) {
        case 'completed':
            return todo.completed
        case 'uncompleted':
            return !todo.completed
        default:
          return todos
      }
    }))
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        todos={todos}
        set_todos={set_todos}
        input_text={input_text}
        set_input_text={set_input_text}
        set_status={set_status}
        />
      <TodoList 
      set_todos={set_todos} 
      todos={todos}
      filtered_todos={filtered_todos}/>
    </div>
  )
}

export default App
