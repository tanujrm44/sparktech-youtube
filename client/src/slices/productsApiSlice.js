import { apiSlice } from "./apiSlice"
import { PRODUCTS_URL } from "../constants"

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: productId => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
    }),
    updateProduct: builder.mutation({
      query: product => ({
        url: `${PRODUCTS_URL}/${product.productId}`,
        method: "PUT",
        body: product,
      }),
    }),
    uploadFileHandler: builder.mutation({
      query: data => ({
        url: "/api/upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadFileHandlerMutation,
} = productsApiSlice
