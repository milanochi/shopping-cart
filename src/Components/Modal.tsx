import { useShoppingCart } from '../Context/ShoppingCartContext';
import CartItems from './CartItems';

const Modal = () => {
    const { cartItems } = useShoppingCart()
  return (
    <section className='modal'>
            <div className='modal__inner'>
                <h4>Cart</h4>
                {
                   cartItems.length > 0 ? cartItems.map(item => <CartItems key={item.id} {...item} />) : <div className='modal__innerEmpty'>
                       No Cart Items.
                   </div>
                }
                <button className={`${cartItems.length < 1 && 'hide'}`} style={{fontWeight: '700'}}>Check Out</button>
            </div>
    </section>
  )
}

export default Modal