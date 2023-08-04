import React, { useState } from 'react';
import Logo from '/src/assets/logo.svg';
import Cart from '/src/assets/icon-cart.svg';
import Modal from './Modal';


const NavBar = () => {
    const [showCart, setShowCart] = useState(false)
  return (
    <div>
        <header className='navbar'>
            <nav className='navbar__inner'>
                <div className='navbar__inner-left'>
                    <div><img src={Logo} alt='logo'/></div>
                    <ul className='navbar__inner-left2'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='navbar__inner-right'>
                    <div className='navbar__inner-cart' onClick={() => setShowCart(!showCart)}>
                        <img src={Cart} style={{cursor: 'pointer'}}alt='cart'/>
                        <div className='navbar__inner-cartNumber'>1</div>
                    </div>
                    <div className='navbar__inner-right2' onClick={() => setShowCart(!showCart)}></div>
                </div>
            </nav>
        </header>
        <div>
            {
            showCart && <Modal />
            }
        </div>  
    </div>
  )
}

export default NavBar