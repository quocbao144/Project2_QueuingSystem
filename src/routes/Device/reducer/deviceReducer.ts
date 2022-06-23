import { createSlice } from "@reduxjs/toolkit"
import { addDevice, getDevice, updateDevice } from "../actions"

const tableData:Array<deviceType> = [
  {
    key: 1,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Ngưng hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: ["Khám tim mạch", "Khám mắt"],
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 12313,
    DeviceType: "Kiosk",
    Password: "CMS",
    UserName: "xxx"
  },
  {
    key: 2,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: ["Khám tim mạch", "Khám mắt"],
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 127675,
    DeviceType: "Kiosk",
    Password: "CMS",
    UserName: "xW@x"
  },
  {
    key: 3,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: ["Khám tim mạch", "Khám mắt"],
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 1876575,
    DeviceType: "Display counter",
    Password: "CMS",
    UserName: "x!@#asdw"
  },
  {
    key: 4,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Ngưng hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: ["Khám tim mạch", "Khám mắt"],
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 87455,
    DeviceType: "Display counter",
    Password: "CMS",
    UserName: "xx873U"
  },
  {
    key: 5,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: ["Khám tim mạch", "Khám mắt"],
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 1675775,
    DeviceType: "Kiosk",
    Password: "CMS",
    UserName: "xPINYW863"
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const deviceReducer = createSlice({
  name: "device",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(getDevice.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    })
    .addCase(getDevice.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
    .addCase(getDevice.rejected, (state) => {
      state.isLoading = true;
      state.error = "Error"
    })
    .addCase(updateDevice.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data.forEach((item,index) => {
        if (item.ProductID === action.payload.ProductID) {
          state.data[index] = {...action.payload}
        } 
      })
    })
    .addCase(addDevice.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
    })
  }
})
export default deviceReducer
export type {deviceType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<deviceType>
}
type deviceType = {
  key: number,
  DeviceCode: string,
  DeviceName: string,
  IPAddress: string,
  WorkingState: "Hoạt động" | "Ngưng hoạt động",
  ConnectStatus:"Kết nối" | "Mất kết nối",
  ServiceUsed: Array<string>,
  Detail: string,
  Update: string,
  ProductID: number,
  UserName: string,
  DeviceType: "Kiosk" | "Display counter",
  Password: string
}