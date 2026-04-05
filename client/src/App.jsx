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
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* HEADER */}
        <header className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800 text-black dark:text-white">
          <h1 className="text-xl font-bold">🛍️ StoreX</h1>
          <ThemeToggle />
        </header>

        {/* CONTENT */}
        <main className="container-app py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        {/* GLOBAL UI */}
        <Cart />
        <ProductModal />
      </div>
    </BrowserRouter>
  );
}

export default App;