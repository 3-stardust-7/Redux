import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Product/>
    </>
  )
}

export default App
