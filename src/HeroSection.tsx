type displayProps = {
    person:{
        id: number,
        firstName: string,
        stack: boolean
    }
}

const HeroSection = ({ person }: displayProps) => {
  return (
    <div>HeroSection: {person.firstName}</div>
  )
}

export default HeroSection