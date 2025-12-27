import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

// Helpers functions
const computeSelectedItems = (products) =>
  products.reduce((total, product) => total + Number(product.quantity || 0), 0);

const computeTotalPrice = (products) =>
  products.reduce(
    (total, product) =>
      total + Number(product.quantity || 0) * Number(product.price || 0),
    0
  );

const computeTax = (totalPrice, taxRate) => totalPrice * taxRate;
const computeGrandTotal = (totalPrice, tax) => totalPrice + tax;

// Load cart from local storage
const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    if (!data) return initialState;
    const parsed = JSON.parse(data);
    const products = parsed.products || [];
    const taxRate = parsed.taxRate ?? initialState.taxRate;

    const totalPrice = computeTotalPrice(products);
    const tax = computeTax(totalPrice, taxRate);
    const selectedItems = computeSelectedItems(products);
    const grandTotal = computeGrandTotal(totalPrice, tax);

    return {
      products,
      selectedItems,
      totalPrice,
      tax,
      taxRate,
      grandTotal,
    };
  } catch {
    return initialState;
  }
};

// Save cart to local storage
const saveCartToLocalStorage = (state) => {
  try {
    // Save the minimal needed information (products and taxRate)
    const toSave = {
      products: state.products,
      taxRate: state.taxRate,
    };
    localStorage.setItem("cart", JSON.stringify(toSave));
  } catch (error) {
    console.error("Error saving cart to local storage:", error);
  }
};

// Cart Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        // item exists
      }

      state.selectedItems = computeSelectedItems(state.products);
      state.totalPrice = computeTotalPrice(state.products);
      state.tax = computeTax(state.totalPrice, state.taxRate);
      state.grandTotal = computeGrandTotal(state.totalPrice, state.tax);

      saveCartToLocalStorage(state);
    },

    // Update Quantity of Product
    updateQuantity: (state, action) => {
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            return { ...product, quantity: product.quantity + 1 };
          } else if (action.payload.type === "decrement") {
            if (product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            }
          }
        }
        return product;
      });

      state.products = products;
      state.selectedItems = computeSelectedItems(state.products);
      state.totalPrice = computeTotalPrice(state.products);
      state.tax = computeTax(state.totalPrice, state.taxRate);
      state.grandTotal = computeGrandTotal(state.totalPrice, state.tax);

      saveCartToLocalStorage(state);
    },

    // Remove From Cart
    removeFromCart: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.products = products;
      state.selectedItems = computeSelectedItems(state.products);
      state.totalPrice = computeTotalPrice(state.products);
      state.tax = computeTax(state.totalPrice, state.taxRate);
      state.grandTotal = computeGrandTotal(state.totalPrice, state.tax);

      saveCartToLocalStorage(state);
    },

    // Clear Cart
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;

      saveCartToLocalStorage(state);
    },
  },
});

// Exported helpers functions
export const setSelectedItems = (state) =>
  state.products.reduce(
    (total, product) => Number(total + product.quantity),
    0
  );

export const setTotalPrice = (state) =>
  state.products.reduce(
    (total, product) => Number(total + product.quantity * product.price),
    0
  );

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => setTotalPrice(state) + setTax(state);

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
