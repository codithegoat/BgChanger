import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor('red')} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={()=>setColor('Green')} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={()=>setColor('Brown')} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'brown'}}>Brown</button>
            <button onClick={()=>setColor('Blue')} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={()=>setColor('White')} className='outline-2px px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'white'}}>White</button>
            <button onClick={()=>setColor('Yellow')} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'yellow'}}>Yellow</button>
          </div>
        </div>
      </div>
  )
}
export default App
