import Tick from '../assets/Tick.jsx'
import Refresh from '../assets/Refresh.jsx'
function TodoList({ todoArry, toggleMarkAsCompleted }) {
    return (
        <div className="rounded-lg max-w-md mx-auto sm:p-4 md:p-6 p-2"> 
            {todoArry.length === 0 ? (
                <div className="flex items-center justify-center p-25 h-screen">
                    <h1 className='text-2xl text-border'>No todos found</h1>
                </div>
            ) : (
                todoArry.map((todo) => (
                    <div key={todo.id} className="flex items-center mb-2  border  border-border p-2 rounded-xl">
                        <span
                            className={`flex-1 text-md  ${todo.isCompleted ? 'line-through text-gray-500' : 'text-white'}`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => toggleMarkAsCompleted(todo.id)}
                            className={`ml-4 px-3 py-1 text-sm font-medium text-white rounded-full ${todo.isCompleted ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-primary'
                                }`}
                        >

                            { todo.isCompleted ? <Refresh />  : <Tick />}
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default TodoList;

