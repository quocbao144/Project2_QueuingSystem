import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import img from './../../../images/Logoalta.png'
import React, { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from './../styles.module.css'
import ButtonC from '../../../components/ButtinC/ButtonC';
import { useNavigate } from 'react-router-dom';
import InputC from '../../../components/InputC/InputC';


const schema = yup.object({
  pass: yup.string().required("Mật khẩu không được để trống").matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Mật khẩu phải bao gồm ít nhất 1 kí tự đặc biệt, chữ in hoa, số và từ 8 kí tự trở lên "
  ),
  reEnterPass: yup.string().required("Mật khẩu không được để trống"),
});

export default function ComfirmPass() {
  const navigate = useNavigate()
  const [isMatch, setisMatch] = useState(true)
  const { handleSubmit, control, formState: { errors } } = useForm({
    // mode: "onTouched",
    defaultValues: {
      pass: "",
      reEnterPass: ""
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: formType) => {   
    if(data.pass === data.reEnterPass.toString()) {
      setisMatch(true)
      navigate("/")
    } else {
      setisMatch(false)
    }   
  }
  return (
    <div className={styles.emailForm}>
      <div><img src={img} alt="Logo alta" /></div>
      <form id="PassForm" onSubmit={handleSubmit(onSubmit)}>
        <div>Đặt lại mật khẩu</div>
        <Controller
          name="pass"
          control={control}
          render={({ field: { onChange, value } }) =>
          <InputC type="password" id='pass' checkReq={true} onChange={onChange} value={value} errors={errors.pass?.message}>Mật khẩu</InputC>}
        />
        <Controller
          name="reEnterPass"
          control={control}
          render={({ field: { onChange, value } }) =>
          <InputC type="password" id='reEnterPass' checkReq={true} onChange={onChange} value={value} errors={errors.reEnterPass?.message}>Nhập lại mật khẩu</InputC>}
        />
        {isMatch? null: <div className={styles.errorMess}>Mật khẩu không trùng khớp</div>}
      </form>
      <div className={styles.buttonGroup}>
        <ButtonC invert={false} form='PassForm'>Xác nhận</ButtonC>
      </div>
    </div>
  )
}
type formType = {
  pass: string
  reEnterPass: string
}