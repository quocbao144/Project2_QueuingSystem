import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./../styles.module.css";
const style = {
  IconRed: {
    backgroundColor: "red",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  IconGreen: {
    backgroundColor: "green",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  Ellipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  Click: {
    color: "#1890ff",
    textDecoration: "underline",
    cursor: "pointer"
  }
}
const handleClick = (e: React.MouseEvent) => {
  const target: Element = e.target as Element
  const currenTarget: Element = e.currentTarget
  const globalClick = () => {
    currenTarget.children[0].classList.toggle(`${styles.More}`)
    if (!currenTarget.children[0].classList.contains(`${styles.More}`)) {
      window.removeEventListener("click", globalClick)
    }
  }
  if (target === currenTarget.children[1] && !currenTarget.children[0].classList.contains(`${styles.More}`)) {
    window.addEventListener("click", globalClick)
  }
}
const tableColumn = [
  {
    title: 'Mã dịch vụ',
    dataIndex: 'ServiceCode',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'ServiceName',
  },
  {
    title: 'Mô tả',
    dataIndex: 'Description',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'WorkingState',
    render: (state: "Ngưng hoạt động" | "Hoạt động") => {
      if (state === "Ngưng hoạt động") {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconRed}></span><span>{state}</span></div>
      } else {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconGreen}></span><span>{state}</span></div>
      }
    }
  },
  {
    title: '',
    dataIndex: 'Detail',
    render: (text: string, {ProductID}:any) => {
      return <Link to={`DeviceDetail/${ProductID}`} style={{ textDecoration: "underline" }}>{text}</Link>
    } 
  },
  {
    title: '',
    dataIndex: 'Update',
    render: (text: string, {ProductID}: any) => {
      return <Link to={`DeviceUpdate/${ProductID}`}  style={{ textDecoration: "underline" }}>{text}</Link>
    }
  },
]
export default tableColumn