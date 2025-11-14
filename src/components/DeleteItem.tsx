import {Trash2} from "lucide-react"


interface DeleteItemProps {
    onDelete: (id: number) => void,
    id: number,
}

const DeleteItem = ({onDelete, id}: DeleteItemProps) => {

  return (
    <button 
    type="button"
    onClick={() => onDelete(id)}
    className='w-11 flex items-center justify-center rounded-md ml-2 bg-yellow-950 text-white hover:bg-yellow-800'>
        <Trash2 size={20} />
    </button>
  )
}

export default DeleteItem
