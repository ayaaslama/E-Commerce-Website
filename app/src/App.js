import React, { Component } from "react";
import HomePage from "./page/home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLog from "./components/utility/NavBarLog";
import Footer from "./components/utility/Footer";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import ShopProductsPage from "./page/Products/ShopProductsPage";
import ShopSale from "./page/Products/ShopSale";
import MenShop from "./page/Products/MenShop";
import BeautyShop from "./page/Products/BeautyShop";
import Computing from "./page/Products/Computing";
import ElectronicsShop from "./page/Products/ElectronicsShop";
import Gaming from "./page/Products/Gaming";
import Kid from "./page/Products/Kid";
import Kitchen from "./page/Products/Kitchen";
import Phones from "./page/Products/Phones";
import School from "./page/Products/School";
import Sport from "./page/Products/Sport";
import Supermarket from "./page/Products/Supermarket";
import Televesions from "./page/Products/Televesions";
import WomenShop from "./page/Products/WomenShop";
import CartPage from "./page/Cart/CartPage";
import { CartProvider } from 'react-use-cart'
import Contact from "./page/Products/Contact";
import About from "./page/Products/About";

class App extends Component {
  render() {
    return (
      <div className="font">
        <CartProvider>
          <NavBarLog />
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/allcategory" element={<AllCategoryPage />} />
              <Route path="/products" element={<ShopProductsPage />} />
              <Route path="/productssale" element={<ShopSale />} />
              <Route path="/menshop" element={<MenShop />} />
              <Route path="/beautyshop" element={<BeautyShop />} />
              <Route path="/computing" element={<Computing />} />
              <Route path="/electronicsshop" element={<ElectronicsShop />} />
              <Route path="/gaming" element={<Gaming />} />
              <Route path="/kid" element={<Kid />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/phones" element={<Phones />} />
              <Route path="/school" element={<School />} />
              <Route path="/sport" element={<Sport />} />
              <Route path="/supermarket" element={<Supermarket />} />
              <Route path="/televesions" element={<Televesions />} />
              <Route path="/womenShop" element={<WomenShop />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />


            </Routes>
          </BrowserRouter>
          <Footer /></CartProvider>
      </div>
    );
  }
}

export default App;
