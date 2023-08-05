import { useShoppingCart } from '../Context/ShoppingCartContext';
import Delete from '/src/assets/icon-delete.svg';
import Items from '../data/db.json';

type CartItemProps = {
    id: number
    quantity: number
}

const CartItems = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = Items.find(elem => elem.id === id)
    if(item == null) return null

  return (
    <div className='modal__inner-content'>
        <img src={item.img} alt='cart-item' style={{borderRadius: '10px', width: '60px', height: '60px', objectFit: 'cover', marginTop: '1rem'}}/>
        <div className='modal__inner-contentInfo'>
            <p>Fall Sneakers</p>
            <span>$125.00</span><span className='modal__inner-contentCount'> X {quantity}</span><span className='modal__inner-contentTotal'>$375</span>
        </div>
    <div>
        <img src={Delete} onClick={() => removeFromCart(id)} className='modal__inner-contentDelete' alt='delete'/>
    </div>
    
</div>
  )
}

export default CartItems