import React, { useState } from 'react'

interface AddTodoFormProps {
    onSubmit: (title: string) => void
}

const AddTodoForm = ({onSubmit}: AddTodoFormProps) => {

    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(!input.trim()) return;
        onSubmit(input)
        setInput("")
    }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Tell me what to do.'
        className='rounded-s-md grow border-2 border-yellow-900 bg-white p-2'
      />
      <button type="submit" className='w-16 rounded-e-md bg-yellow-950 text-white hover:bg-yellow-900'>
        Add
      </button>
    </form>
  )
}

export default AddTodoForm
