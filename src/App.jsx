import Home from './pages/Home';
import ProductList from './pages/ProductList';

import Product from "./pages/Product";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';



function App() {
 const userAuth=useSelector((state) => state.user.currentUser);
 console.log('from App : ',userAuth);
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        {/* <Route path="/register" element={<Register/>} /> */}


        <Route path="/login" element={
            <Protecte auth={!userAuth}>
              <Login />
             </Protecte>}/>

        <Route path="/register" element={
            <Protecte auth={!userAuth}>
              <Register />
             </Protecte>}/>


        <Route path="/success" element={<Success/>} />
    </Routes>
  );
}
export default App;


function Protecte({auth, children }) {   
  return auth ? children : <Navigate to="/" />;
 
}
