import './App.css';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';
import HomePage from './Pages/HomePage';


function App() {

  return (
    <>
    <ShoppingCartProvider>
      <HomePage />
    </ShoppingCartProvider>
    </>
  )
}

export default App

