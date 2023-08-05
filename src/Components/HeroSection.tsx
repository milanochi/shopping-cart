import Items from '../data/db.json';
import HeroStoreItems from './HeroStoreItems';
const HeroSection = () => {
    
  return (
    <main className='hero' style={{position: 'relative'}}>
        {
            Items.map(item => <HeroStoreItems key={item.id} {...item} />)
        }
    </main>
  )
}

export default HeroSection