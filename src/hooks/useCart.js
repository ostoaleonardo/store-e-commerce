import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart() {
    const cart = useContext(CartContext)

    if (!cart) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return cart
}