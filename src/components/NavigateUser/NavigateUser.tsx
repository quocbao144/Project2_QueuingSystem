import React, { useEffect, useRef } from 'react'
import { AiFillBell } from "react-icons/ai";
import styles from "./styles.module.css";
import img from "./../../images/smallUser.png"
import { List } from 'antd';
import data from "./data.json"
import { useNavigate } from 'react-router-dom';
function NavigateUser() {
  const navigate = useNavigate()
  const reportRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const handleClickInSide = (e:MouseEvent) => {
    if(ringRef.current && ringRef.current.contains(e.target as Node)) {
      ringRef.current.classList.toggle(`${styles.click}`)
      reportRef.current?.classList.toggle(`${styles.togger}`)
    } else {
      ringRef.current?.classList.remove(`${styles.click}`)
      reportRef.current?.classList.remove(`${styles.togger}`)
      
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClickInSide)
    return () => {
      window.removeEventListener("click", handleClickInSide)
    }
  }, [])
  return (
    <div className={styles.flex}>
      <div >
        <div ref={ringRef}>
        <AiFillBell />
        </div>
        <div className={styles.reports} ref={reportRef}>
          <div>Thông báo</div>
          <List
            dataSource={data}
            renderItem={item => (
              <div className={styles.itemHolder}>
              <List.Item key={item.id} className={styles.item}>
                <List.Item.Meta
                  title={<div onClick={()=> {navigate(`/Number/${item.id}`)}}>{item.name}</div>}
                  description={`Thời gian nhân số: ${item.receiveTime} ngày ${item.receiveDay}`}
                />
              </List.Item>
              </div>
            )}
          />
        </div>
      </div>
      <div onClick={()=> {navigate("UserProfile")}}>
        <div><img src={img} alt="" /></div>
        <div>
          <p>Xin chào</p>
          <p>Lê Quỳnh Ái Vân</p>
        </div>
      </div>
    </div>
  )
}
export default React.memo(NavigateUser)