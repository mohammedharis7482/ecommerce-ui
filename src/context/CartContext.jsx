import {
  createContext,
  useState,
} from "react";

import toast from "react-hot-toast";

export const CartContext =
  createContext();

function CartProvider({
  children,
}) {

  const [cartItems, setCartItems] =
    useState([]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem =
      cartItems.find(
        (item) =>
          item.id === product.id
      );

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  (product.quantity || 1),
              }
            : item
        )
      );

      toast.success(
        "Cart Updated"
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity:
            product.quantity || 1,
        },
      ]);

      toast.success(
        "Added To Cart"
      );
    }
  };

  // REMOVE FROM CART

  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

    toast.error(
      "Removed From Cart"
    );
  };

  // INCREASE QUANTITY

  const increaseQuantity = (
    id
  ) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE QUANTITY

  const decreaseQuantity = (
    id
  ) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id &&
        item.quantity > 1
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )
    );
  };

  // SUBTOTAL

  const subtotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;