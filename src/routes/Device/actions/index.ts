import { createAsyncThunk } from "@reduxjs/toolkit"
import deviceReducer, { deviceType } from "../reducer/deviceReducer"

const getDevice = createAsyncThunk("device/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<deviceType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((deviceReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateDevice = createAsyncThunk("device/update", async (formdata: deviceType) => {
  //fake put data
  const promise:Promise<deviceType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addDevice = createAsyncThunk("device/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<deviceType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getDevice, updateDevice,addDevice}