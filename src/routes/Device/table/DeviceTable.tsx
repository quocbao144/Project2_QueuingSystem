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
    title: 'Mã thiết bị',
    dataIndex: 'DeviceCode',
  },
  {
    title: 'Tên thiết bị',
    dataIndex: 'DeviceName',
  },
  {
    title: 'Địa chỉ IP',
    dataIndex: 'IPAddress',
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
    title: 'Trạng thái kết nối',
    dataIndex: 'ConnectStatus',
    render: (state: "Mất kết nối" | "Kết nối") => {
      if (state === "Mất kết nối") {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconRed}></span><span>{state}</span></div>
      } else {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconGreen}></span><span>{state}</span></div>
      }
    }
  },
  {
    title: 'Dịch vụ sử dụng',
    dataIndex: 'ServiceUsed',
    render: (array: Array<string>) => <div onClick={(e) => handleClick(e)} style={{ maxWidth: "9rem" }}><div style={{ ...style.Ellipsis, whiteSpace: "nowrap", }}>{array.join(", ")}</div><div style={style.Click}>Xem thêm</div></div>,
    className: "ServiceUsed"
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
