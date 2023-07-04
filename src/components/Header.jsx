const Header = () => {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-around  py-5">
        <h1 className="text-2xl font-bold cursor-pointer">My Todo</h1>
        <p className="bg-green-900 rounded-md p-2 font-semibold text-sm cursor-pointer">Add todo</p>
      </div>
    </div>
  )
}

export default Header