import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import styles from "./../../styles.module.css";
import InputC from '../../../../components/InputC/InputC';
import SelectC, { Option, tagRender } from '../../../../components/SelectC/SelectC';
import ButtonC from '../../../../components/ButtinC/ButtonC';
import { updateDevice } from '../../actions';

const schema = yup.object({
  DeviceCode: yup.string(),
  DeviceName: yup.string(),
  UserName: yup.string(),
});
export default function DeviceUpdate() {
  const navigate = useNavigate()
  let param = useParams()
  const state = useAppSelector((state) => state.device)
  const dispatch = useAppDispatch()
  const data = state.data.filter((item) => {
    return item.ProductID.toString() == param.ProductID
  })
  const { handleSubmit, control, formState: { errors } ,getValues  } = useForm({
    // mode: "onTouched",
    defaultValues: {
      DeviceCode: data[0].DeviceCode,
      DeviceName: data[0].DeviceName,
      DeviceType: data[0].DeviceType,
      UserName: data[0].UserName,
      IPAddress: data[0].IPAddress,
      Password: data[0].Password,
      ServiceUsed: data[0].ServiceUsed,
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (formdata: ReturnType<typeof getValues>) => {
    dispatch(updateDevice({...data[0],...formdata})).then(()=>navigate("/Device"))
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
                <InputC type="text" id='DeviceCode' onChange={onChange} value={value} errors={errors.DeviceCode?.message}>Mã thiết bị: </InputC>}
            />
            <Controller
              name="DeviceType"
              control={control}
              render={({ field: { onChange, value } }) => {
                return <SelectC
                  style={{ width: "100%", fontSize: "1rem" }}
                  defaultValue={data[0].DeviceType}
                  onChange={onChange}
                  value={value}
                  label='Loại thiết bị: '
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
                <InputC type="text" id='DeviceName' onChange={onChange} value={value} errors={errors.DeviceName?.message}>Tên thiết bị: </InputC>}
            />
            <Controller
              name="UserName"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='UserName' onChange={onChange} value={value} errors={errors.UserName?.message}>Tên đăng nhập: </InputC>}
            />
            <Controller
              name="IPAddress"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='IPAddress' onChange={onChange} value={value} errors={errors.IPAddress?.message}>Địa chỉ IP: </InputC>}
            />
            <Controller
              name="Password"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='Password' onChange={onChange} value={value} errors={errors.Password?.message}>Mật khẩu: </InputC>}
            />
            <Controller
              name="ServiceUsed"
              control={control}
              render={({ field: { onChange, value } }) => {
                return <SelectC
                  mode='multiple'
                  style={{ width: "100%", fontSize: "1rem" }}
                  defaultValue={data[0].ServiceUsed}
                  onChange={onChange}
                  value={value}
                  tagRender={tagRender}
                  label='Loại thiết bị: '
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
        <ButtonC form='DeviceForm' type='submit'>Cập nhập</ButtonC>
        </div>
      </div>
    </>
  )
}
