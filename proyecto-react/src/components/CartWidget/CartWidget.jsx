import React from 'react'
import stylesCW from './CartWidget.module.css'
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  return (
    <FiShoppingCart className={stylesCW.cart}/>
  )
}

export default CartWidget