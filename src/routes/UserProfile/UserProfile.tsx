import React from 'react'
import InputC from '../../components/InputC/InputC';
import styles from "./styles.module.css";
import img from "./../../images/bigUser.png"
export default function UserProfile() {
  return (
    <div>
      <div className={styles.userInfo}>
        <form>
          <div className={styles.imgField}>
            <img src={img} alt="" />
            <div>Lê Quỳnh Ái Vân</div>
          </div>
          <div className={styles.infoField}>
            <InputC type={"text"} value={"Lê Quỳnh Ái Vân"} disabled>Tên người dùng</InputC>
            <InputC type={"text"} value={"lequynhaivan01"} disabled>Tên đăng nhập</InputC>
            <InputC type={"text"} value={"0767375921"} disabled>Số điện thoại</InputC>
            <InputC type={"text"} value={"311940211"} disabled>Mật khẩu</InputC>
            <InputC type={"text"} value={"adminSSO1@domain.com"} disabled>Email</InputC>
            <InputC type={"text"} value={"Kế toán"} disabled>Vai trò</InputC>
          </div>
        </form>
      </div>
    </div>
  )
}
