import { createAsyncThunk } from "@reduxjs/toolkit"

const user = {
  username: "phuong6428",
  password: "1234!Abcd"
}

const loginVerify = createAsyncThunk(
  "login/verify",
  async (formdata: typeof user) => {
    const promise: Promise<string> = new Promise((resolve, reject) => {
      if(formdata.username === "quocbao" && formdata.password === "Bao@123456") {
        setTimeout(()=> {resolve("Success")}, 1000)
      } else {
        setTimeout(()=> {reject("Fail")}, 1000)
      }
    })
    return await promise
  }
)

export {loginVerify}