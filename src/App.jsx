import Home from './pages/Home';
import ProductList from './pages/ProductList';

import Product from "./pages/Product";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Success from './pages/Success';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<Success/>} />

       
    </Routes>
      //  <div>
      //    <Home/>
      //    <ProductList/>
      //    <Product/>
      //    <Login/>
      //    <Register/>
      //    <Cart/>
      //  </div>
  );
}

export default App;
