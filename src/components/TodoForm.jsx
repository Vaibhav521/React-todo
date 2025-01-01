import { useState } from "react"
import AddIcon from "../assets/AddIcon";

function TodoForm({ addTodo }) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(input.trim())
        if(!input) return
        try {
            addTodo(input)
        } catch (err) {
            console.log(err)
        } finally {
            setInput('')
        }
    }

    return (
        <div className="flex justify-center items-center pt-4">
            <form onSubmit={handleSubmit} className="max-w-sm w-full p-2 rounded-lg">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Add todo"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="border bg-secondary border-border p-2 rounded-lg w-full outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        <AddIcon className="h-5 w-5" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm