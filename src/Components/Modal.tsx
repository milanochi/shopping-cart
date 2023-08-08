import { useShoppingCart } from '../Context/ShoppingCartContext';
import FormatCurrency from '../Utilities/FormatCurrency';
import CartItems from './CartItems';
import Items from '../data/db.json';

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
                  <div className={`${cartItems.length < 1 ? 'hide' : 'modal__inner-total'}`}><span>TOTAL</span>: {
                    FormatCurrency(cartItems.reduce((total, cartItem) => {
                        let item = Items.find(x => x.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity }, 0 )
                    )}
                  </div>
                <button className={`${cartItems.length < 1 && 'hide'}`}>Check Out</button>
            </div>
    </section>
  )
}

export default Modal