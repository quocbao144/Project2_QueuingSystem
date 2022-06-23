import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import img from './../../../images/Logoalta.png'
import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form';
import styles from './../styles.module.css'
import ButtonC from '../../../components/ButtinC/ButtonC';
import { useNavigate } from 'react-router-dom';
import InputC from '../../../components/InputC/InputC';


const schema = yup.object({
  email: yup.string().required("Email không được để trống").email("Email không hợp lệ"),
});

export default function ComfirmEmail({ handleNext }: propType) {
  const navigate = useNavigate()
  const { handleSubmit, control, formState: { errors } } = useForm({
    // mode: "onTouched",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: formType) => {
    //Omit comfirm email api logic
    if (data.email === "phuong6428@gmail.com") {
      //Click to switch to ComfirmPass
      handleNext()
    } else {alert("Email không tồn tại trong hệ thống")}
  }
  return (
    <div className={styles.emailForm}>
      <div><img src={img} alt="Logo alta" /></div>
      <form id="EmailForm" onSubmit={handleSubmit(onSubmit)}>
        <div>Đặt lại mật khẩu</div>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) =>
          <InputC type="email" id='email' checkReq={true} onChange={onChange} value={value} errors={errors.email?.message}>Vui lòng nhập email để đặt lại mật khẩu của bạn</InputC>}
        />
      </form>
      <div className={styles.buttonGroup}>
        <ButtonC invert={true} onClick={() => navigate("/")}>Hủy</ButtonC>
        <ButtonC invert={false} form='EmailForm'>Tiếp tục</ButtonC>
      </div>
    </div>
  )
}
type formType = {
  email: string
}
type propType = {
  handleNext: () => void
}