import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

// Load wishlist from local storage
const loadWishlistFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : initialState;
  } catch {
    return initialState;
  }
};

// Save wishlist to local storage
const saveWishlistToLocalStorage = (products) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify({ products }));
  } catch (error) {
    console.error("Error saving wishlist to local storage:", error);
  }
};

// Wishlist Slice
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadWishlistFromLocalStorage(),
  reducers: {
    // Add To Wishlist
    addToWishlist: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
        saveWishlistToLocalStorage(state.products);
      } else {
        // already added
      }
    },

    // Remove From Wishlist
    removeFromWishlist: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = products;
      saveWishlistToLocalStorage(state.products);
    },

    // Clear Wishlist
    clearWishlist: (state) => {
      state.products = [];
      saveWishlistToLocalStorage(state.products);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
