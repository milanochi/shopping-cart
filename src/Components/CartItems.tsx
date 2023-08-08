import { useShoppingCart } from '../Context/ShoppingCartContext';
import Delete from '/src/assets/icon-delete.svg';
import Items from '../data/db.json';
import FormatCurrency  from '../Utilities/FormatCurrency'

type CartItemProps = {
    id: number
    quantity: number
}


const CartItems = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart, sumCartItems } = useShoppingCart()
    const item = Items.find(elem => elem.id === id)
    if(item == null) return null
    const total = sumCartItems(item.price, quantity)
   

  return (
    <div className='modal__inner-content'>
        <img src={item.img} alt='cart-item' style={{borderRadius: '10px', display: 'flex', alignItems: 'center',width: '60px', height: '60px', objectFit: 'cover'}}/>
        <div className='modal__inner-contentInfo'>
            <p>{item.name}</p>
            <span>{FormatCurrency(item.price)}</span><span className='modal__inner-contentCount'> X {quantity}</span><span className='modal__inner-contentTotal'>{FormatCurrency(total)}</span>
        </div>
    <div>
        <img src={Delete} onClick={() => removeFromCart(id)} className='modal__inner-contentDelete' alt='delete'/>
    </div>
</div>
  )
}

export default CartItems