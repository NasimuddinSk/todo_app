import { useState } from "react";
import TodoLst from "./components/TodoList.jsx";
import Header from "./components/header.jsx";


function App() {

  const [todoData, setTodoData] = useState([{ id: 2, task: "loremajj jhgasdj" }, { id: 5, task: "loremajj jhgasdj" }, { id: 8, task: "loremajj jhgasdj" }, { id: 9, task: "loremajj jhgasdj" }, { id: 6, task: "loremajj jhgasdj" }, { id: 897, task: "loremajj jhgasdj" }, { id: 697, task: "loremajj jhgasdj" }]);

  return (
    <>
      <Header />

      <div className="grid md:grid-cols-3 grid-cols-1   gap-4 ml-2 mr-2 items-center justify-center mt-5 text-center">
        {
          todoData.map((todo) => {
            return <TodoLst key={todo.id} todo={todo} />
          })
        }
      </div>

    </>

  )
}

export default App


