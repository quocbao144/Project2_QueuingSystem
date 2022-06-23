import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hook'
import styles from "./../../styles.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
export default function DeviceDetail() {
  let param = useParams()
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.device)
  const data = state.data.filter((item) => {
    return item.ProductID.toString() == param.ProductID
  })
    //Xu ly vi tri them thiet bi
    const ref = useRef<HTMLDivElement>(null)
    const addRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if(ref.current && addRef.current) {
        const domRect  = ref.current.getBoundingClientRect()
        addRef.current.style.top = `${domRect.y + ref.current.scrollTop }px`
        addRef.current.style.display = "flex"
      }
    },[])
  return (
    <>
      <div className={styles.device} style={{paddingRight: "2rem"}}>
        <div>Quản lý thiết bị</div>
        <div className={styles.detailContain} ref={ref}>
          <div>Thông tin thiết bị</div>
          <div className={styles.detail} >
            <div><span>Mã thiết bị:</span>{data[0].DeviceCode}</div>
            <div><span>Loại thiết bị:</span>{data[0].DeviceName}</div>
            <div><span>Tên thiết bị:</span>{data[0].DeviceName}</div>
            <div><span>Tên đăng nhập:</span>{data[0].UserName}</div>
            <div><span>Địa chỉ IP:</span>{data[0].IPAddress}</div>
            <div><span>Mật khẩu:</span>{data[0].Password}</div>
            <div><span>Dịch vụ sử dụng:</span>{data[0].ServiceUsed.join(", ")}</div>
          </div>
        </div>
      </div>
      <div ref={addRef} className={styles.Add} onClick={()=> {navigate(`/Device/DeviceUpdate/${param.ProductID}`)}}><AiFillPlusSquare/><span>Cập nhập thiết bị</span></div>
    </>
  )
}
