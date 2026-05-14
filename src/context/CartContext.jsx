import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] =
    useState([]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem =
      cartItems.find(
        (item) =>
          item.id === product.id
      );

    // IF PRODUCT EXISTS

    if (existingItem) {

      setCartItems(

        cartItems.map((item) =>

          item.id === product.id

            ? {
                ...item,

                quantity:
                  item.quantity + 1,
              }

            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,

        {
          ...product,

          quantity: 1,
        },
      ]);
    }
  };

  // REMOVE ITEM

  const removeFromCart = (id) => {

    setCartItems(

      cartItems.filter(
        (item) => item.id !== id
      )
    );
  };

  // INCREASE QUANTITY

  const increaseQuantity = (id) => {

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

  const decreaseQuantity = (id) => {

    setCartItems(

      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,

              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }

          : item
      )
    );
  };

  // TOTAL ITEMS

  const totalItems =
    cartItems.reduce(

      (total, item) =>

        total + item.quantity,

      0
    );

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

        totalItems,

        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;