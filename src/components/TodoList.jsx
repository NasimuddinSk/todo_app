const TodoList = ({ todo }) => {
  return (
    <div className="bg-slate-700 p-5 rounded-md relative">
      <p>
        {todo.task}
      </p>
      <p className="bg-green-500 px-2 rounded-sm rotate-45 absolute top-6 -right-3 font-medium">
        01/05/2023
      </p>
      <div className="flex gap-5 m-2 items-center justify-center">
        <p className="bg-red-600 rounded-md p-2 font-medium
              cursor-pointer">Delete</p>
        <p className="bg-green-600 rounded-md p-2 font-medium cursor-pointer">Update</p>
      </div>

    </div>
  )
}




export default TodoList