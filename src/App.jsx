import { Routes, Route } from "react-router";
import Nav from "./components/Nav/Nav";
import Login from "./page/AuthPage/Login";
import Register from "./page/AuthPage/Register";
import HomePage from "./page/HomePage/HomePage";
import ProductPage from "./page/ProductPage/ProductPage";
import CartContainer from "./page/CartPage/CartContainer";
import ProductView from "./components/Product/ProductView";
import Footer from "./components/Footer/Footer";
import AllProducts from "./page/ProductPage/AllProducts";
import Contact from "./page/Contact/Contact";

function App() {

  
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={ <Register/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/" element={<HomePage />} />
        
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/product/:id" element={<ProductView />} />

        <Route path="/products" element={<ProductPage />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route path="/products/clothes" element={<AllProducts />} />
          <Route path="/products/shoes" element={<AllProducts />} />
        
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
