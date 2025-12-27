import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//fetchProducts is an asynchronous action that is dispatched when the component mounts
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }
);

//productSlice is a slice of the Redux store
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

//CreatAsyncThunk is a function that returns a thunk action creator. It is used to handle asynchronous operations in Redux.
//extraReducers is a function that is used to add reducers to the slice. It is called automatically when the slice is created.
