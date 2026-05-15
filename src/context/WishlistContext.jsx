import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WishlistContext =
  createContext();

function WishlistProvider({
  children,
}) {

  // LOAD FROM LOCAL STORAGE

  const [wishlistItems,
    setWishlistItems] =
    useState(() => {

      const savedWishlist =
        localStorage.getItem(
          "wishlist"
        );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );

  }, [wishlistItems]);

  // ADD TO WISHLIST

  const addToWishlist = (
    product
  ) => {

    const exists =
      wishlistItems.find(
        (item) =>
          item.id === product.id
      );

    if (!exists) {

      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  // REMOVE FROM WISHLIST

  const removeFromWishlist = (
    id
  ) => {

    setWishlistItems(

      wishlistItems.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,

        addToWishlist,

        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;