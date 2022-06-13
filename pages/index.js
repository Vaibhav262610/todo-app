import { useState } from "react";
import Items from "../components/Items";


export default function Home() {

  const [ description , setDescription ] = useState();
  const [ todos , setTodos ] = useState([])

  const addItem = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: Math.floor(Math.random()*100), description: description }])
    setDescription(" ")
  }

  return (
    <>
    <div className="bg-black text-white h-screen w-full flex flex-col justify-center items-center">
    
      <h1 className="text-6xl font-extrabold mb-8">TODO APP</h1>
      
      <form onSubmit={addItem}>
      
      <div className="flex gap-5 ">
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value) }  placeholder="Type here" className=" bg-transparent input input-bordered input-warning w-full max-w-xs" />
        <button className="btn btn-outline btn-warning">ADD</button>
      </div>
      
      </form>
      
      <hr className="w-full border-gray-400 mt-8" />
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ">
    
        {
          todos.map(e => <Items key={e.key} todoText={e.description}  />)
        }
        {/* <Items todoText={description} /> */}
    
      </div>
        </div>
    </>
  )
}
