import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/cartItem.css";
import { formatCurrency } from "../utilities/formatCurrency.js";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext.jsx";

export function CartItem({ id, quantity, selectedSection }) {
  const { showList } = useContext(GlobalContext);
  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
  } = useShoppingCart();
  const item = showList.find((i) => i.id === id);
  // if (item == null) return null;
  return (
    <>
      <td className="cart-item">
        <img src={item.image} />
        <span className="info">
          <p>{item.name}</p>
          <p> {item.location}</p>
          <p> {item.date}</p>
          <p> Section: {selectedSection}</p>
        </span>
      </td>
      <td>{formatCurrency(item.price, 0)}</td>
      <td>
        <span className="add-to-cart-buttons">
          <button onClick={() => decreaseCartQuantity(id, selectedSection)}>
            -
          </button>
          <p>{getItemQuantity(id, selectedSection)}</p>
          <button
            onClick={() => {
              increaseCartQuantity(id, selectedSection);
            }}
          >
            +
          </button>
        </span>
      </td>
      <td>
        {formatCurrency(item.price * quantity, 0)}
        <button onClick={() => removeFromCart(id, selectedSection)}>
          &times;
        </button>
      </td>
    </>
  );
}

// <div>
//     <img src={item.image} />
//     <div>
//         <div>
//             {item.name}
//             {quantity > 1 && <span>x{quantity}</span>}
//             <p>Section: {selectedSection}</p>
//         </div>
//         <div>{item.price}</div>
//     </div>
//     <div> {item.price * quantity}</div>
//     <button onClick={() => removeFromCart(id, selectedSection)}>
//         &times;
//     </button>
// </div>
