import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useProductStore } from "./store/useProductStore";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const darkMode = useProductStore((s) => s.darkMode);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>

        <header className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
          <h1 className="text-xl font-bold">🛍️ StoreX</h1>
          <ThemeToggle />
        </header>

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