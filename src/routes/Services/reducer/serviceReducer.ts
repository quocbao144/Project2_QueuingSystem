import { createSlice } from "@reduxjs/toolkit"
import { getService } from "../actions"

const tableData:Array<serviceType> = [
  {
    key: 1,
    ServiceCode: 'KIO_01',
    ServiceName: "Kiosk",
    Description: "Mô tả 1",
    WorkingState: "Ngưng hoạt động",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 12313,
  },
  {
    key: 2,
    ServiceCode: 'KIO_01',
    ServiceName: "Kiosk",
    Description: "Mô tả 2",
    WorkingState: "Ngưng hoạt động",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 1213,
  },
  {
    key: 3,
    ServiceCode: 'KIO_01',
    ServiceName: "Kiosk",
    Description: "Mô tả 3",
    WorkingState: "Hoạt động",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 12154313,
  },
  {
    key: 4,
    ServiceCode: 'KIO_01',
    ServiceName: "Kiosk",
    Description: "Mô tả 4",
    WorkingState: "Ngưng hoạt động",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 12545313,
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const serviceReducer = createSlice({
  name: "service",
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
    .addCase(getService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
  }
})
export default serviceReducer
export type {serviceType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<serviceType>
}
type serviceType = {
  key: number,
  ServiceCode: string,
  ServiceName: string,
  Description: string,
  WorkingState: "Hoạt động" | "Ngưng hoạt động",
  Detail: string,
  Update: string,
  ProductID: number,
}