import { useCycle } from '../Hooks/useCycle'

type CarouselProps = {
    slide: string []
}
const Carousel = ( { slide }: CarouselProps ) => {
    const [current, next, prev] = useCycle(slide)
  return (
    <div className='hero__inner-leftWrap hide'>
            <img src={slide[current]} key={current} className='hero__inner-img' alt='hero-img'/>
            <button onClick={next}>NEXT</button>
            <button onClick={prev}>PREV</button>
        <div className='hero__inner-thumb'>
            <img src={slide[0]} className='hero__inner-thumbnail' alt='thumbnail'/>
            <img src={slide[1]} className='hero__inner-thumbnail' alt='thumbnail'/>
            <img src={slide[2]} className='hero__inner-thumbnail' alt='thumbnail'/>
            <img src={slide[3]} className='hero__inner-thumbnail' alt='thumbnail'/>
        </div>
    </div>
  )
}

export default Carousel