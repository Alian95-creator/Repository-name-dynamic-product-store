import { useProductStore } from "../store/useProductStore";

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useProductStore();

  const total = getTotalPrice();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.thumbnail}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Qty: {item.qty}
                </p>
              </div>

              <p className="font-bold">
                ${item.price * item.qty}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TOTAL */}
      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow">
          <h3 className="text-lg font-bold">
            Total: ${total.toFixed(2)}
          </h3>

          <button className="mt-4 w-full bg-black text-white py-3 rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;