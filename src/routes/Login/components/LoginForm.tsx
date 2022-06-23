import React, { useRef, useState } from 'react'
import img from './../../../images/Logoalta.png'
import styles from './../styles.module.css'
import { AiFillEyeInvisible, AiFillEye, AiOutlineExclamationCircle } from "react-icons/ai";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { loginVerify } from '../actions';
import ButtonC from '../../../components/ButtinC/ButtonC';
import { useNavigate } from "react-router-dom";
import InputC from '../../../components/InputC/InputC';

// Yup schema
const schema = yup.object({
  username: yup.string().required("Tên đăng nhập không được để trống"),
  password: yup.string().required("Mật khẩu không được để trống").matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Mật khẩu phải bao gồm ít nhất 1 kí tự đặc biệt, chữ in hoa, số và từ 8 kí tự trở lên "
  )
});

function MyLoginForm() {
  const state = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // Xu ly validate form va logic dispatch form
  const { handleSubmit, control, formState: { errors } } = useForm({
    // mode: "onTouched",
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: formType) => {
    dispatch(loginVerify(data)).unwrap().then(() => navigate("/Dashboard"))
  };
  const navigateReset = <div className={styles.errorMess} onClick={() => { navigate("/Reset") }}>Quên mật khẩu?</div>
  return (
    <div className={styles.loginForm}>
      <div><img src={img} alt="Logo alta" /></div>
      <form id="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, value } }) =>
          <InputC type="text" id='username' checkReq onChange={onChange} value={value} errors={errors.username?.message}>Tên đăng nhập</InputC>}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) =>
          <InputC type="password" id='password' checkReq onChange={onChange} value={value} errors={errors.password?.message}>Mật khẩu</InputC>}
        />
        {state.error ? <div className={styles.errorMess}><AiOutlineExclamationCircle /> <span>Sai mật khẩu hoặc tên đăng nhập</span></div> : navigateReset}
      </form>
      <div>
        <ButtonC form='LoginForm' invert={false} disabled={state.isloading}>Đăng nhập</ButtonC>
        {state.error ? navigateReset : null}
      </div>
    </div>
  )
}

export const LoginForm = React.memo(MyLoginForm);
type formType = {
  username: string
  password: string
}