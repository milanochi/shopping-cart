import Cart from '/src/assets/icon-cart.svg';
import Plus from '/src/assets/icon-plus.svg';
import Minus from '/src/assets/icon-minus.svg';
import FormatCurrency from '../Utilities/FormatCurrency';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import Carousel from './Carousel';

type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
    thumbnails: string
    slashed: number
    carousel: string []

}


const HeroStoreItems = ({ id, name, price, img, thumbnails, slashed, carousel }: StoreItemProps) => {
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
                <Carousel slide={carousel}/>
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
                            <div className='hero__inner-rightSlashedPrice'>{FormatCurrency(slashed)}</div>
                        </div>
                        <div className='hero__inner-rightActions'>
                            <div className='hero__inner-rightModify'>
                                <button onClick={() => decreaseCartQuantity(id)} style={{border: 'none', background: 'none', width: '20px'}}>
                                    <img src={Minus} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}alt='minus'/>
                                </button>
                                <h3>{quantity}</h3>
                                <button onClick={() => increaseCartQuantity(id)} style={{border: 'none', background: 'none', width: '20px'}}>
                                    <img src={Plus}  style={{cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%'}}alt='plus'/>
                                </button>
                            </div>
                            <button className='hero__inner-rightCheckOut' onClick={() => increaseCartQuantity(id)}>
                                <div><img src={Cart} style={{cursor: 'pointer', color:'white'}}alt='cart'/></div>
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