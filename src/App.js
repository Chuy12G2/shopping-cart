import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Shopping from './components/Shopping'
import Cart from './components/Cart'
import HomePage from './components/HomePage'

function App() {


  return (
    <div className="App">
      <h1>Hola</h1>
      <Link to='/shopping'>Shopping</Link>
      <br/>
      <Link to='/cart'>Cart</Link>
      <br/>
      <Link to='/home'>Home</Link>

      <Routes>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
