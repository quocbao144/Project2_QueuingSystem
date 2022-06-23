import { createSlice } from "@reduxjs/toolkit";
import { loginVerify } from "../actions";

const initialState:stateType = {
  isloading: false,
  error: "",
  data: ""
}
const loginReducer = createSlice({
  name:"login",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginVerify.pending, (state)=> {
      console.log("pend")
      state.isloading = true;
      state.error = ""
    })
    .addCase(loginVerify.rejected, (state,action)=> {
      console.log(action, "reject")
      state.isloading = false;
      state.error = action.error.message!
    })
    .addCase(loginVerify.fulfilled, (state,action)=> {
      console.log(action, "success")
      state.isloading = false;
      state.data = action.payload
      state.error = ""
    })

  }
})
export default loginReducer

type stateType = {
  isloading: boolean,
  error: string,
  data: string
}