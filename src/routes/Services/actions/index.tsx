import { createAsyncThunk } from "@reduxjs/toolkit"
import serviceReducer, { serviceType } from "../reducer/serviceReducer"

const getService = createAsyncThunk("service/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<serviceType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((serviceReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateService = createAsyncThunk("device/update", async (formdata: serviceType) => {
  //fake put data
  const promise:Promise<serviceType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addService = createAsyncThunk("device/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<serviceType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getService, updateService,addService}