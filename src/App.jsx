import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import CartDetails from './pages/CartDetails'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product'>
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='/cart' element={<CartDetails />} />
      </Routes>
    </>
  )
}

export default App
