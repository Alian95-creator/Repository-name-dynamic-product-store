import Home from "./pages/Home";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-4">
        🛍️ Product Store
      </h1>

      <Home />

      <Cart />
      <ProductModal />
    </div>
  );
}

export default App;