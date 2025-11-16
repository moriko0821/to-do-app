import TodoItem from "./components/TodoItem"
import AddTodoForm from "./components/AddTodoForm";
import DeleteItem from "./components/DeleteItem";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
    sortTodos
  } = useTodos();

  return (
    <main className="bg-yellow-50 py-10 min-h-screen space-y-5 overflow-y-auto">
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
      <TodoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  )
}

export default App
