import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {
  return (
    <main>
      <h1>YOUR TODOS</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map(data => (
            <p key={data.id} className="text-lg">
              <TodoItem todo={data}/>
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
