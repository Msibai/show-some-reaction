import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import "../css/shoppingCart.css";
import { formatCurrency } from "../utilities/formatCurrency.js";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext.jsx";

export default function ShoppingCart({ isCartOpen }) {
  const { showList } = useContext(GlobalContext);
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();
  return (
    <div className="shopping-cart">
      {cartQuantity > 0 ? (
        <>
          <h2>
            Your Cart [{cartQuantity} Item{cartQuantity > 1 ? "s" : ""}]
          </h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.selectedSection + item.id}>
                    <CartItem {...item} />
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td id="total" colSpan="3">
                    Total Amount
                  </td>
                  <td>
                    {formatCurrency(
                      cartItems.reduce((total, cartItem) => {
                        const item = showList.find((i) => i.id === cartItem.id);
                        return total + (item?.price || 0) * cartItem.quantity;
                      }, 0)
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      ) : (
        <>
          <h2>Your Cart is Empty</h2>
        </>
      )}
    </div>
  );
}
