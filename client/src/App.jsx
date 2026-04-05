import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        <h1 className="text-2xl font-bold text-center py-4">
          🛍️ Product Store
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <Cart />
        <ProductModal />
      </div>
    </BrowserRouter>
  );
}

export default App;