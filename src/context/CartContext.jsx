import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext =
  createContext();

function CartProvider({ children }) {

  // LOAD CART FROM LOCAL STORAGE

  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  // SAVE CART TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

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

  // REMOVE

  const removeFromCart = (id) => {

    setCartItems(

      cartItems.filter(
        (item) => item.id !== id
      )
    );
  };

  // INCREASE

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

  // DECREASE

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