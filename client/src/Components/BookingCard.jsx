import "../css/bookingCard.css";
import { useShoppingCart } from "../context/ShoppingCartContext.jsx";
import { formatCurrency } from "../utilities/formatCurrency.js";

export default function BookingCard({
  id,
  name,
  price,
  image,
  location,
  date,
  sections,
}) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  sections = JSON.parse(sections);

  return (
    <div className="booking-card">
      <div className="booking-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="booking-card-content">
        <h4>Name: {name}</h4>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Price: {formatCurrency(price, 0)}</p>
        {sections.map((section) => (
          <div key={section} className="add-to-cart">
            <h5>Section {section}</h5>
            <div className="add-to-cart-buttons">
              <button onClick={() => decreaseCartQuantity(id, section)}>
                -
              </button>
              <p>{getItemQuantity(id, section)}</p>
              <button
                onClick={() => {
                  increaseCartQuantity(id, section);
                }}
              >
                +
              </button>
            </div>
            <p>Seats</p>
          </div>
        ))}
      </div>
    </div>
  );
}
