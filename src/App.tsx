import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  const [todos, setTodos] = useState(dummyData)

function setTodoCompleted(id: number, completed: boolean) {
  alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`);
  setTodos((prevTodos) => 
    prevTodos.map(todo => (
      todo.id === id ? {...todo, completed: completed} : todo
    ))  
  );
}

  return (
    <main className="bg-yellow-50 py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">YOUR TODOS</h1>
      <div className="max-w-lg mx-auto bg-yellow-100 rounded-md p-5">
        <div className="space-y-2">
          {todos.map(data => (
            <p key={data.id} className="text-lg">
              <TodoItem
              key={data.id}
              todo={data}
              onCompleteChange={setTodoCompleted}
              />
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
