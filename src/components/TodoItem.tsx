import type { Todo } from '../types/todo'

interface TodoItemProps {
    todo: Todo;
    onCompleteChange: (id: number, completed: boolean) => void
}

const TodoItem = ({todo, onCompleteChange}: TodoItemProps) => {
  return (
    <div>
      <label className='flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50'>
        <input 
        type="checkbox" 
        onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
        checked={todo.completed}
        className="scale-125" 
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.title}
        </span>
      </label>
    </div>
  )
}

export default TodoItem
