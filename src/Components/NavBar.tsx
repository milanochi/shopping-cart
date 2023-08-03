import React from 'react';
import Logo from '/src/assets/logo.svg';
import Cart from '/src/assets/icon-cart.svg';


const NavBar = () => {
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
                    <div><img src={Cart} style={{cursor: 'pointer'}}alt='cart'/></div>
                    <div className='navbar__inner-right2'></div>
                </div>
            </nav>
        </header>
        
    </div>
  )
}

export default NavBar