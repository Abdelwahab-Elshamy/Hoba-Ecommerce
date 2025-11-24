import { Routes, Route } from "react-router-dom";
import Bottomheader from "./header/Bottomheader";
import Topheader from "./header/Topheader";
import Home from "./page/home/Home";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import Favorites from "./page/favorites/Favorites";
import About from "./page/about/About";
import Accessories from "./page/accessories/Accessories";
import Contact from "./page/contact/Contact";
function App() {
  return (
    <>
      <header>
        <Topheader />
        <Bottomheader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
