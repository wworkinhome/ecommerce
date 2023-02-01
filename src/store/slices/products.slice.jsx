import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      return products;
    }
  }
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsCategoryThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories=${id}`)
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsHeadlineThunk = (productsSearch) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      "https://e-commerce-api-v2.academlo.tech/api/v1/products?headline__icontains=" +
        productsSearch
    )
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;