import { apiSlice } from "./apiSlice"
import { USERS_URL } from "../constants"

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = userApiSlice
