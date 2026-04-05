import { useProductStore } from "../store/useProductStore";

const Cart = () => {
  const cart = useProductStore((s) => s.cart);

  const total = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg">
      🛒 {total}
    </div>
  );
};

export default Cart;