import { apiSlice } from "./apiSlice"
import { USERS_URL } from "../constants"

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      url: `${USERS_URL}/login`,
      model: "POST",
      body: data,
    }),
  }),
})

export const { useLoginMutation } = userApiSlice
