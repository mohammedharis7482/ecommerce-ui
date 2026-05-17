import {
  createContext,
  useState,
} from "react";

import toast from "react-hot-toast";

export const WishlistContext =
  createContext();

function WishlistProvider({
  children,
}) {

  const [
    wishlistItems,
    setWishlistItems,
  ] = useState([]);

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

      toast.success(
        "Added To Wishlist"
      );
    }
  };

  // REMOVE FROM WISHLIST

  const removeFromWishlist = (
    id
  ) => {

    setWishlistItems(
      wishlistItems.filter(
        (item) => item.id !== id
      )
    );

    toast.error(
      "Removed From Wishlist"
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