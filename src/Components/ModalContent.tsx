import React from 'react'
import CartItem from '/src/assets/image-product-3-thumbnail.jpg';
import Delete from '/src/assets/icon-delete.svg';

const ModalContent = () => {
  return (
    <div className='modal__inner-content'>
        <img src={CartItem} alt='cart-item' style={{borderRadius: '10px', width: '60px', height: '60px', objectFit: 'cover', marginTop: '1rem'}}/>
        <div className='modal__inner-contentInfo'>
            <p>Fall Limited Edition Sneakers</p>
            <span>$125.00</span><span className='modal__inner-contentCount'> X 3</span><span className='modal__inner-contentTotal'>$375</span>
        </div>
    <div>
        <img src={Delete} className='modal__inner-contentDelete' alt='delete'/>
    </div>
</div>
  )
}

export default ModalContent