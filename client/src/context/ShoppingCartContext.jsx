import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function getItemQuantity(id, selectedSection) {
    return (
      cartItems.find(
        (item) => item.id === id && item.selectedSection === selectedSection
      )?.quantity || 0
    );
  }

  function increaseCartQuantity(id, selectedSection) {
    setCartItems((currItems) => {
      if (
        currItems.find(
          (item) => item.id === id && item.selectedSection === selectedSection
        ) == null
      ) {
        return [...currItems, { id, quantity: 1, selectedSection }];
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.selectedSection === selectedSection) {
            return { ...item, quantity: item.quantity + 1, selectedSection };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id, selectedSection) {
    let decreasedItem = cartItems.find(
      (item) => item.id === id && item.selectedSection === selectedSection
    );
    setCartItems((currentItems) => {
      if (decreasedItem?.quantity === 1) {
        return currentItems.filter((item) => item !== decreasedItem);
      } else {
        return currentItems.map((item) => {
          if (item === decreasedItem) {
            return { ...item, quantity: item.quantity - 1, selectedSection };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id, selectedSection) {
    let removedItem = cartItems.find(
      (item) => item.id === id && item.selectedSection === selectedSection
    );
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item !== removedItem);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
