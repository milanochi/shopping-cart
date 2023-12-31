import React, { useState } from 'react';
import Logo from '/src/assets/logo.svg';
import Cart from '/src/assets/icon-cart.svg';
import Modal from './Modal';
import { useShoppingCart } from '../Context/ShoppingCartContext';

const NavBar = () => {
    const [showCart, setShowCart] = useState(false)
    const { cartQuantity } = useShoppingCart()
  return (
    <nav className='navbar'>
            <div className='navbar__inner'>
                <div className='navbar__inner-left'>
                    <div style={{display: 'flex', alignItems:'center', height:'100%'}}><img src={Logo} className='logo' alt='logo'/></div>
                    <div style={{display: 'flex', alignItems: 'center',height:'100%'}}>
                        <ul className='navbar__inner-left2'>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
                <div className='navbar__inner-right'>
                    <div className='navbar__inner-cart' onClick={() => setShowCart(!showCart)}>
                        <div style={{display: 'flex', alignItems:'center'}}><img src={Cart}  style={{cursor: 'pointer'}}alt='cart'/></div>
                        <div className={`${cartQuantity < 1 && 'hide'}`}>
                            <div className={`navbar__inner-cartNumber`}>{cartQuantity}</div>
                        </div>
                    </div>
                    <div className='navbar__inner-right2' onClick={() => setShowCart(!showCart)}></div>
                </div>
            </div>
        <div>
            {
            showCart && <Modal />
            }
        </div>  
    </nav>
  )
}

export default NavBar