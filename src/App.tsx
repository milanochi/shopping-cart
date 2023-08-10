import './App.css';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';
// import ButtonProps from './ButtonProps';
// import Input from './Input';
import HomePage from './Pages/HomePage';


function App() {
  const person = {
    id: 1,
    firstName: 'Ochi',
    lastName: 'Daniel',
    stack: true
  }
  const nameList = [
    {
      id: 1,
      fullName: 'Thomas Jefferson'
    }
  ]
  return (
    <>
    <ShoppingCartProvider>
      <HomePage />
    </ShoppingCartProvider>
   
    {/* <ButtonProps handleClick={(event, id) => console.log("HELLO__", event.type, id)}/>
    <Input value='' handleChange={(event) => console.log(event)} /> */}
    </>
  )
}

export default App

