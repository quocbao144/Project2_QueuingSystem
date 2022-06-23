import React from 'react'
import styles from './styles.module.css'
import img1 from './../../images/Group341.png'
import { LoginForm } from './components/LoginForm'
export default function Login() {
  return (
    <div className={styles.Layout}>
      <LoginForm />
      <div>
        <img src={img1} alt="Hinh He Thong Xep Hang" />
        <div>
          <p>Hệ thống</p>
          <h4>Quản lý xếp hàng</h4>
        </div>
      </div>
    </div>
  )
}
