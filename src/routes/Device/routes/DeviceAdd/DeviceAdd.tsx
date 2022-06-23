import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import styles from "./../../styles.module.css";
import InputC from '../../../../components/InputC/InputC';
import SelectC, { Option, tagRender } from '../../../../components/SelectC/SelectC';
import ButtonC from '../../../../components/ButtinC/ButtonC';
import { addDevice } from '../../actions';
const schema = yup.object({
  DeviceCode: yup.string(),
  DeviceName: yup.string(),
  UserName: yup.string(),
});
export default function DeviceAdd() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { handleSubmit, control, formState: { errors } ,getValues  } = useForm({
    // mode: "onTouched",
    defaultValues: {
      DeviceCode: "",
      DeviceName: "",
      DeviceType: "",
      UserName: "",
      IPAddress: "",
      Password: "",
      ServiceUsed: undefined,
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (formdata: ReturnType<typeof getValues>) => {
    dispatch(addDevice(formdata)).then(()=>{navigate("/Device")})
  };
  return (
    <>
      <div className={styles.device}>
        <div>Quản lý thiết bị</div>
        <div className={styles.updateContain}>
          <div>Thông tin thiết bị</div>
          <form id="DeviceForm" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="DeviceCode"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Nhập mã thiết bị' id='DeviceCode' onChange={onChange} value={value} errors={errors.DeviceCode?.message}>Mã thiết bị: </InputC>}
            />
            <Controller
              name="DeviceType"
              control={control}
              render={({ field: { onChange, value } }) => {
                return <SelectC
                  style={{ width: "100%", fontSize: "1rem" }}
                  onChange={onChange}
                  value={value ? value: undefined }
                  label='Loại thiết bị: '
                  placeholder='Nhập loại thiết bị'
                >
                  <Option value="Kiosk">Kiosk</Option>
                  <Option value="Display counter">Display counter</Option>
                </SelectC>
              }}
            />
            <Controller
              name="DeviceName"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Nhập tên thiết bị' id='DeviceName' onChange={onChange} value={value} errors={errors.DeviceName?.message}>Tên thiết bị: </InputC>}
            />
            <Controller
              name="UserName"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Nhập tài khoản' id='UserName' onChange={onChange} value={value} errors={errors.UserName?.message}>Tên đăng nhập: </InputC>}
            />
            <Controller
              name="IPAddress"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Nhập địa chỉ IP' id='IPAddress' onChange={onChange} value={value} errors={errors.IPAddress?.message}>Địa chỉ IP: </InputC>}
            />
            <Controller
              name="Password"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Nhập mật khẩu' id='Password' onChange={onChange} value={value} errors={errors.Password?.message}>Mật khẩu: </InputC>}
            />
            <Controller
              name="ServiceUsed"
              control={control}
              render={({ field: { onChange, value } }) => {
                return <SelectC
                  mode='multiple'
                  style={{ width: "100%", fontSize: "1rem" }}
                  onChange={onChange}
                  value={value}
                  tagRender={tagRender}
                  label='Loại thiết bị: '
                  placeholder="Nhập dịch vụ sử dụng"
                >
                   <Option value="Khám tim mạch">Khám tim mạch</Option>
                   <Option value="Khám mắt">Khám mắt</Option>
                   <Option value="Khám sản phụ khoa">Khám sản phụ khoa</Option>
                   <Option value="Khám răng hàm mặt">Khám răng hàm mặt</Option>
                   <Option value="Khám tai mũi họng">Khám tai mũi họng</Option>
                   <Option value="Khám hô hấp">Khám hô hấp</Option>
                   <Option value="Khám tổng quát">Khám tổng quát</Option>
                </SelectC>
              }}
            />
          </form>
          <br />
          <p style={{color: "#535261", fontSize: "0.875rem"}} ><span style={{color: "red"}}>*</span>Là trường thông tin bắt buộc</p>
        </div>
        <div className="buttonHolder">
        <ButtonC invert onClick={()=> navigate("..")}>Hủy bỏ</ButtonC>
        <ButtonC form='DeviceForm' type='submit'>Thêm thiết bị</ButtonC>
        </div>
      </div>
    </>
  )
}
