import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem("userInfo", JSON.stringify(action.payload))

      const expirationTime = Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days
      localStorage.setItem("expirationTime", expirationTime)
    },
    logout: state => {
      state.userInfo = null
      localStorage.removeItem("userInfo")
      localStorage.removeItem("expirationTime")
    },
  },
})

export const { setCredentials, logout } = userSlice.actions

export default userSlice.reducer
