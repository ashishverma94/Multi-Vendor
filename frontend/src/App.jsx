import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="w-11/12 line-through mx-auto bg-slate-600">
        Hello world!
      </h1>
    </>
  )
}

export default App
