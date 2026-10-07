import { useState } from 'react'
import './App.css'

const colors= [ "bg-red-500", "bg-green-500", "bg-blue-500","bg-yellow-500","bg-pink-500","bg-orange-500","bg-purple-500","bg-white","bg-black"]
  
function App() {
  const [activeColor, setActiveColor] = useState("bg-black");
  return (
    <>
      <div className={`${activeColor} h-screen w-screen`}>
        <div className="bg-gray-500 h-10 w-[75vw] shadow-2xl flex items-center justify-center fixed bottom-3 left-[12.5vw] rounded-3xl">
          {
            colors.map((c)=>(
              <button className = {`${c} h-4 w-4 rounded-full justify-center p-4 mr-3 hover:cursor-pointer active:scale-120 transition-transform duration-300`} onClick={()=>{setActiveColor(c)}}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App;