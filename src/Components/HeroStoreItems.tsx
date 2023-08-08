import WCart from '/src/assets/icon-white-cart.png';
import Plus from '/src/assets/icon-plus.svg';
import Minus from '/src/assets/icon-minus.svg';
import FormatCurrency from '../Utilities/FormatCurrency';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import Carousel from './Carousel';
import { useState } from 'react';
import MobileCarousel from './MobileCarousel';


type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
    thumbnails?: string
    slashed: number
    carousel: string []
    stock: number
}


const HeroStoreItems = ({ id, name, price, img, slashed, carousel, stock }: StoreItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
    const quantity = getItemQuantity(id)
   const [showCarousel, setShowCarousel] = useState(false)

  return (
    <div>{
        showCarousel && <Carousel slide={carousel} setShowCarousel={setShowCarousel}/>
        }
         <section className='hero__inner'>
            <div className='hero__inner-left'>
                <div className='hero__inner-leftWrap'>
                    <img src={img} className='hero__inner-img' alt='hero-img' onClick={() => setShowCarousel(true)}/>
                    <div className='hero__inner-thumb'>
                    <img src={carousel[0]} className='hero__inner-thumbnail' alt='thumbnail'/>
                    <img src={carousel[1]} className='hero__inner-thumbnail' alt='thumbnail'/>
                    <img src={carousel[2]} className='hero__inner-thumbnail' alt='thumbnail'/>
                    <img src={carousel[3]} className='hero__inner-thumbnail' alt='thumbnail'/>
                </div>
                </div>
                
            </div>
            <MobileCarousel slide={carousel}/>
            <div className='hero__inner-right'>
                <div className='hero__inner-rightWrap'>
                    <div className='hero__inner-rightTop'>
                        <small>SNEAKER COMPANY</small>
                        <h1>{name}</h1>
                    </div>
                    <div className='hero__inner-rightBottom'>
                        <p>Collections Men Women About Contact Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                        <div style={{fontSize: '1em', marginBottom:'.5rem',color: 'hsl(26, 100%, 55%)'}}>Stock remaining:<span style={{fontSize: '1.2em',marginLeft: '.2rem', fontWeight: '700', color: '#333'}}>{stock}</span></div>
                        <div className='hero__inner-rightPrice'>
                            <div className='hero__inner-rightCurrentPrice'>
                                <h2 style={{color: '#333'}}>{FormatCurrency(price)}</h2><span>50%</span>
                            </div>
                            <div className='hero__inner-rightSlashedPrice'>{FormatCurrency(slashed)}</div>
                        </div>
                        <div className='hero__inner-rightActions'>
                            <div className='hero__inner-rightModify'>
                                <button onClick={() => decreaseCartQuantity(id)} style={{cursor: 'pointer',border: 'none',background: 'none', width: '20px'}}>
                                    <img src={Minus} style={{ display: 'flex', alignItems: 'center'}}alt='minus'/>
                                </button>
                                <h3>{quantity}</h3>
                                <button onClick={() => increaseCartQuantity(id, stock)} style={{cursor: 'pointer', border: 'none', background: 'none', width: '20px'}}>
                                    <img src={Plus}  style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}alt='plus'/>
                                </button>
                            </div>
                            <button className='hero__inner-rightCheckOut' onClick={() => increaseCartQuantity(id, stock)}>
                                <div><img src={WCart} style={{cursor: 'pointer', color:'white', height: '25px', width: '25px'}}alt='cart'/></div>
                                <h5>Add to Cart</h5>
                            </button>
                        </div>
                    </div>
                </div>        
            </div>
        </section>  
    </div>
  )
}

export default HeroStoreItems