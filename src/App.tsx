import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
import DeleteItem from "./components/DeleteItem";

function App() {

  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map(todo => (
        todo.id === id ? {...todo, completed: completed} : todo
      ))  
    );
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => 
      prevTodos.filter(todo => todo.id !== id)
    )
  }

  const sortTodos = todos.sort((a, b) => {
    if(a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1: -1
  })

  return (
    <main className="bg-yellow-50 py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">YOUR TODOS</h1>
      <div className="max-w-lg mx-auto bg-yellow-100 rounded-md p-6">
        <div className="space-y-3">
          {sortTodos.map(data => (
            <div key={data.id} className="text-lg flex">
              <TodoItem
              todo={data}
              onCompleteChange={setTodoCompleted}
              />
              <DeleteItem 
              id={data.id}
              onDelete={deleteTodo}
              />
            </div>
          ))}
          <div className="py-2">
            <AddTodoForm onSubmit={addTodo}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
