import { useState , useEffect} from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
function App() {


  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')


  
  const addTodo = (todoData) => {
    setTodos([...todos, { id: Date.now(), text: todoData, isCompleted: false }])
  }

  const toggleMarkAsCompleted = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      } else {
        return todo
      }
    })
    setTodos(updatedTodo)
  }


  function handleFilter(type) {
    setFilter(type)
  }


  const filteredTodos = todos.filter((todo) => {
    if (filter == 'active') {
      return !todo.isCompleted
    }
    if (filter == 'completed') {
      return todo.isCompleted
    }
    return true
  })


  // here we save our todo in local storagee
  useEffect(() => {
    if(todos.length > 0){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])


  // get ourr todo if present
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])





  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoFilter handleFilter={handleFilter} currentFilter={filter} />
      <TodoList todoArry={filteredTodos} toggleMarkAsCompleted={toggleMarkAsCompleted} />

    </>
  )
}

export default App
