import React from 'react';
import ModalContent from './ModalContent';

const Modal = () => {
  return (
    <section className='modal'>
            <div className='modal__inner'>
                <h4>Cart</h4>
                <ModalContent />
                <button>Check Out</button>
            </div>
    </section>
  )
}

export default Modal