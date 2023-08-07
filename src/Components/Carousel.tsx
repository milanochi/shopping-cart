import { useCycle } from '../Hooks/useCycle'
import Prev from '/src/assets/icon-previous.svg';
import Next from '/src/assets/icon-next.svg';
import Close from '/src/assets/icon-close.svg';
import { useState } from 'react';

type CarouselProps = {
    slide: string []
    setShowCarousel: (id: boolean) => void
}

const Carousel = ( { slide, setShowCarousel }: CarouselProps ) => {
    const [current, next, prev] = useCycle(slide)
    const [close, setClose] = useState(false)

  return (
    <div className={'hero__inner-scale'}>
        <div className='hero__inner-scaleWrap'>
            <img src={slide[current]} key={current} className='hero__inner-img2' alt='hero-img'/>
            <div className='hero-innerBtn'>
                <img src={Prev} className='hero-innerBtn1' onClick={prev}/>
                <img src={Next} className='hero-innerBtn2' onClick={next}/>
            </div>
                <img src={Close} onClick={() => setShowCarousel(false)} className='hero-innerClose'/>
              
            <div className='hero__inner-thumb'>
                <img src={slide[0]} className='hero__inner-thumbnail' alt='thumbnail'/>
                <img src={slide[1]} className='hero__inner-thumbnail' alt='thumbnail'/>
                <img src={slide[2]} className='hero__inner-thumbnail' alt='thumbnail'/>
                <img src={slide[3]} className='hero__inner-thumbnail' alt='thumbnail'/>
            </div>
            </div>
    </div>
  )
}

export default Carousel