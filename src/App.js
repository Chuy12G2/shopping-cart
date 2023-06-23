import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Shopping from './components/Shopping'
import Cart from './components/Cart'
import HomePage from './components/HomePage'
import data from './data'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState(data)

  return (
    <div className="App">
      <h1>Store</h1>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/shopping'>Shopping</Link>
      <br/>
      <Link to='/cart'>Cart</Link>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shopping' element={<Shopping products={products} setProducts={setProducts}/>}/>
        <Route path='/cart' element={<Cart
        products={products} setProducts={setProducts}/>}/>
      </Routes>
    </div>
  )
}

export default App;
