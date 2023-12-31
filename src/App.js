import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import ShopContextProvider from './context/shop-context';
import Home from './pages/home/home';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar />

      <Routes>
      <Route exact path='/'element={ <Shop />}/>

      <Route  path='/home' element={ <Home />} />

      <Route  path='/cart'element={ <Cart />} />

      


      </Routes>



      </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
