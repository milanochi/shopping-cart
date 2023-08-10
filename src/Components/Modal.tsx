import { useShoppingCart } from '../Context/ShoppingCartContext';
import FormatCurrency from '../Utilities/FormatCurrency';
import CartItems from './CartItems';
import Items from '../data/db.json';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Modal = () => {
    const { cartItems } = useShoppingCart()
    const netTotal = cartItems.reduce((total, cartItem) => {
      let item = Items.find(x => x.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity }, 0 )
      console.log(netTotal)
  
    const email = 'johndoe@gmail.com';
    const phone_number = '08000000000'
    const name = 'Daniel'

    const config = {
      public_key: 'FLWPUBK_TEST-f1a974601c1499e92c2252c0330c10f7-X',
      tx_ref: Date.now(),
      amount: netTotal,
      currency: 'USD',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email,
         phone_number,
        name,
      },
      customizations: {
        title: 'SNEAKERS',
        description: 'Payment for items in cart',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
  
    const handleFlutterPayment = useFlutterwave(config as any);
  
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
                    FormatCurrency(netTotal)}
                  </div>
                <button onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}className={`${cartItems.length < 1 && 'hide'}`}>Check Out</button>
            </div>
    </section>
  )
}

export default Modal