import { createContext, useState } from 'react'

export const CartContext = createContext()

const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )

    const addToCart = (product) => {
        // Check if product is already in cart
        const productIndex = cart.findIndex((item) => item.id === product.id)

        // If product is in cart, update quantity
        if (productIndex >= 0) {
            const updatedCart = structuredClone(cart)
            updatedCart[productIndex].quantity += 1
            updateLocalStorage(updatedCart)
            return setCart(updatedCart)
        }

        // If product is not in cart, add it
        const newCart = [...cart, { ...product, quantity: 1 }]
        updateLocalStorage(newCart)
        return setCart(newCart)
    }

    const removeItemToCart = (product) => {
        // Check if product is already in cart and update quantity
        const productIndex = cart.findIndex((item) => item.id === product.id)

        if (productIndex >= 0) {
            const updatedCart = structuredClone(cart)
            updatedCart[productIndex].quantity -= 1

            // Remove item if quantity is 0
            if (updatedCart[productIndex].quantity === 0) {
                updatedCart.splice(productIndex, 1)
            }

            // Update local storage
            updateLocalStorage(updatedCart)

            return setCart(updatedCart)
        }
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter((item) => item.id !== product.id))

        // Update local storage
        updateLocalStorage(cart)
    }

    const clearCart = () => {
        setCart([])

        // Update local storage
        localStorage.removeItem('cart')
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                clearCart,
                removeFromCart,
                removeItemToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
