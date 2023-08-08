import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number, stock: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItems[]
  sumCartItems: (initialPrice: number, quantity: number) => number 
}

type CartItems = {
  id: number
  quantity: number 
}

type ShoppingCartProviderProps = {
  children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>('shopping-cart', [])
  
  
  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number, stock: number) {
    setCartItems(currentItems => {  
      if(currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else{
        return currentItems.map(item => {
          if(item.id === id && item.quantity < stock) {
            return {...item, quantity: item.quantity + 1 }
          }
          else{
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: number) {
    setCartItems(currentItems => {
      if(currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else{
        return currentItems.map(item => {
          if(item.id === id) {
            return {...item, quantity: item.quantity - 1 }
          }else{
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: number) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  
  const sumCartItems = (initialPrice: number, quantity: number): number => {
    return initialPrice * quantity
    
}

  return <ShoppingCartContext.Provider value={{
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    sumCartItems,
    cartItems,
    cartQuantity,
  }}>
    {
      children
    }
  </ShoppingCartContext.Provider>
}