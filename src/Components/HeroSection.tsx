import React from 'react';
import Cart from '/src/assets/icon-cart.svg';
import Plus from '/src/assets/icon-plus.svg';
import Minus from '/src/assets/icon-minus.svg';

const HeroSection = () => {
  return (
    <main className='hero'>
        <section className='hero__inner'>
            <div className='hero__inner-left'>
                <div className='hero__inner-img'></div>
                <div className='hero__inner-thumb'>
                    <div className='hero__inner-thumbnail img1'></div>
                    <div className='hero__inner-thumbnail img2'></div>
                    <div className='hero__inner-thumbnail img1'></div>
                    <div className='hero__inner-thumbnail img2'></div>
                </div>
            </div>
            <div className='hero__inner-right'>
                <div className='hero__inner-rightWrap'>
                    <div className='hero__inner-rightTop'>
                        <small>SNEAKER COMPANY</small>
                        <h1>Fall Limited Edition Sneakers</h1>
                    </div>
                    <div className='hero__inner-rightBottom'>
                        <p>Collections Men Women About Contact Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                        <div className='hero__inner-rightPrice'>
                            <div className='hero__inner-rightCurrentPrice'>
                                <h2>$125.00</h2><span>50%</span>
                            </div>
                            <div className='hero__inner-rightSlashedPrice'>$250.00</div>
                        </div>
                        <div className='hero__inner-rightActions'>
                            <div className='hero__inner-rightModify'>
                                <img src={Plus} style={{cursor: 'pointer'}}alt='plus'/>
                                <h3>0</h3>
                                <img src={Minus} style={{cursor: 'pointer'}}alt='minus'/>
                            </div>
                            <div className='hero__inner-rightCheckOut'>
                                <img src={Cart} style={{cursor: 'pointer', color:'white'}}alt='cart'/>
                                <span style={{marginLeft: '8px', color: 'white', fontWeight: '500'}}>Add to Cart</span>
                            </div>
                        </div>
                    </div>
                    </div>        
            </div>
        </section>
    </main>
  )
}

export default HeroSection