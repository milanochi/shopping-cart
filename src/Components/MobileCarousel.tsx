import React from 'react'
import { useCycle } from '../Hooks/useCycle'
import Prev from '/src/assets/icon-previous.svg';
import Next from '/src/assets/icon-next.svg';

type MobileCarouselProps = {
    slide: string []
}

const MobileCarousel = ( { slide }: MobileCarouselProps ) => {
    const [current, next, prev] = useCycle(slide)
  return (
    <div>
         {/* MOBILE CAROUSEL */}
         <div className='hero__inner-left2'>
                <div className='hero__inner-leftWrap'>
                    <img src={slide[current]}  key={current} className='hero__inner-img' alt='hero-img'/>
                    <div className='hero-innerBtn'>
                        <img src={Prev} className='hero-innerBtn1' onClick={prev}/>
                        <img src={Next} className='hero-innerBtn2' onClick={next}/>
                     </div>
                </div>    
        </div>
    </div>
  )
}

export default MobileCarousel