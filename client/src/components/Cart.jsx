import { useProductStore } from "../store/useProductStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useProductStore((s) => s.cart);
  const total = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Link
      to="/cart"
      className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-full"
    >
      🛒 {total}
    </Link>
  );
};

export default Cart;