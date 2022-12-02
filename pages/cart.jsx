import React, { useEffect } from 'react'
import getCommerce from "../lib/commerce"
import { useSelector, useDispatch } from 'react-redux'
import { getCart, updateStart } from '../redux/cartStore'


const Cart = () => {

  const dispatch = useDispatch()
  const commerce = getCommerce()

  const { cart, pending } = useSelector(state => state.cart)

  useEffect(() => {
    const fetchCart = async  () => {
      const cart = await commerce.cart.retrieve()
      dispatch(getCart(cart))
    }
    fetchCart()
  })
  


  return (
    <div>
      <h1> Cart</h1>
      <p>{cart && cart.total_unique_items}</p>
    </div>
  )
}

export default Cart