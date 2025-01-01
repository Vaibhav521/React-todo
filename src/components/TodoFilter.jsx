function TodoFilter({ handleFilter, currentFilter }) {
    return (
        <div className="flex justify-center space-x-4 my-4">
            <button className={`px-4 py-1 rounded-full border-solid-2 border-green-800  ${currentFilter === 'all' ? 'bg-primary text-black' : 'text-white'}`}
                onClick={() => handleFilter('all')}>All</button>
            <button className={`px-4 py-1 rounded-full border-solid-2 border-green-800 ${currentFilter === 'active' ? 'bg-primary text-black' : 'text-white'}`}
                onClick={() => handleFilter('active')}>Active</button>
            <button className={`px-4 py-1 rounded-full border-solid-2 border-green-800 ${currentFilter === 'completed' ? 'bg-primary text-black' : 'text-white'}`}
                onClick={() => handleFilter('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter


