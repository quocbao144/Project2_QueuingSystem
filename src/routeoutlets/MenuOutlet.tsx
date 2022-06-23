import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavigateMenu from '../components/NavigateMenu/NavigateMenu'
import NavigateUser from '../components/NavigateUser/NavigateUser'
import styles from "./styles.module.css"
import img from "./../images/Logoalta.png"
import ButtonC from '../components/ButtinC/ButtonC'
import { BsBoxArrowRight } from "react-icons/bs";
import BreadC from '../components/BreadC/BreadC'
export default function MenuOutlet() {
  const navigation = useNavigate()
  return (
    <div className={styles.menuOutlet}>
      <div>
        <div className={styles.logo}><img src={img} onClick={() => { navigation("/Dashboard") }}></img></div>
        <NavigateMenu />
        <div style={{ marginTop: "auto" }}><ButtonC invert onClick={() => { navigation("/") }}> <BsBoxArrowRight /> <span>Đăng xuất</span></ButtonC></div>
      </div>
      <div>
        <div className={styles.userNav}>
          <BreadC />
          <NavigateUser />
        </div>
        <Outlet />
      </div>
    </div>
  )
}
