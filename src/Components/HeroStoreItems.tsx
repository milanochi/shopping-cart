import Cart from '/src/assets/icon-cart.svg';
import Plus from '/src/assets/icon-plus.svg';
import Minus from '/src/assets/icon-minus.svg';
import FormatCurrency from '../Utilities/FormatCurrency';
import { useShoppingCart } from '../Context/ShoppingCartContext';

type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
    thumbnails: string
}

const HeroStoreItems = ({ id, name, price, img, thumbnails }: StoreItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
    const quantity = getItemQuantity(id)
  return (
    <div>
         <section className='hero__inner'>
            <div className='hero__inner-left'>
                <div className='hero__inner-leftWrap'>
                    <img src={img} className='hero__inner-img' alt='hero-img'/>
                    <div className='hero__inner-thumb'>
                    <img src={thumbnails} className='hero__inner-thumbnail' alt='thumbnail'/>
                    <img src={thumbnails} className='hero__inner-thumbnail' alt='thumbnail'/>
                    <img src={thumbnails} className='hero__inner-thumbnail' alt='thumbnail'/>
                    <img src={thumbnails} className='hero__inner-thumbnail' alt='thumbnail'/>
                </div>
                </div>
            </div>
            <div className='hero__inner-right'>
                <div className='hero__inner-rightWrap'>
                    <div className='hero__inner-rightTop'>
                        <small>SNEAKER COMPANY</small>
                        <h1>{name}</h1>
                    </div>
                    <div className='hero__inner-rightBottom'>
                        <p>Collections Men Women About Contact Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                        <div className='hero__inner-rightPrice'>
                            <div className='hero__inner-rightCurrentPrice'>
                                <h2>{FormatCurrency(price)}</h2><span>50%</span>
                            </div>
                            <div className='hero__inner-rightSlashedPrice'>$250.00</div>
                        </div>
                        <div className='hero__inner-rightActions'>
                            <div className='hero__inner-rightModify'>
                                <button style={{border: 'none', background: 'none'}}>
                                    <img src={Minus} onClick={() => decreaseCartQuantity(id)} style={{cursor: 'pointer'}}alt='plus'/>
                                </button>
                                <h3>{quantity}</h3>
                                <button style={{border: 'none', background: 'none'}}>
                                    <img src={Plus} onClick={() => increaseCartQuantity(id)} style={{cursor: 'pointer'}}alt='minus'/>
                                </button>
                            </div>
                            <button className='hero__inner-rightCheckOut' onClick={() => increaseCartQuantity(id)}>
                                <img src={Cart} style={{cursor: 'pointer', color:'white'}}alt='cart'/>
                                    <span style={{marginLeft: '8px', color: 'white', fontWeight: '600', fontSize:'1em'}}>Add to Cart</span>
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