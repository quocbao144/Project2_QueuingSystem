import { Breadcrumb } from 'antd';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { filerArray, PathType } from './BreadMap';
import styles from "./styles.module.css";
function BreadC() {
  const navigate = useNavigate()
  const location = useLocation()
  const interverArray = filerArray(location.pathname.slice(1).split("/"))
  const handleClick = (item: PathType, index: number) => {
    if (!item.path || index >= interverArray.length -1 ) {
      return
    } else navigate(item.path)
  }
  return (
    <Breadcrumb separator=">" className={styles.customB}>
      {interverArray[0].prefix ?
        <Breadcrumb.Item>
          {interverArray[0].prefix}
        </Breadcrumb.Item> : null}
      {interverArray.map((item, index) => {
        return <Breadcrumb.Item
        className={index>= interverArray.length-1 ? undefined:  styles.BreadItem}
          key={item.pathName}
          onClick={() => { handleClick(item, index) }}>
          {item.name}
        </Breadcrumb.Item>
      })}
    </Breadcrumb>
  )
}
export default React.memo(BreadC)
