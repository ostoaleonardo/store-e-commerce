import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { FiltersProvider } from './context/filters'
import { CartProvider } from './context/cart'
import App from './App.jsx'
import './styles/index.css'
import './styles/font.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <BrowserRouter>
      <FiltersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FiltersProvider>
    </BrowserRouter>
  </NextUIProvider>,
)
