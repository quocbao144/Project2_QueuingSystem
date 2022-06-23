import React, { useEffect, useRef, useState } from 'react'
import SelectC, { Option } from '../../components/SelectC/SelectC';
import TableC from '../../components/TableC/TableC';
import styles from "./styles.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import tableColumn from './table/ServiceTable';

export default function Services() {
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.service)
  //Xu ly vi tri them thiet bi
  const ref = useRef<HTMLDivElement>(null)
  const addRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current && addRef.current) {
      const domRect = ref.current.getBoundingClientRect()
      addRef.current.style.top = `${domRect.y + ref.current.scrollTop}px`
      addRef.current.style.display = "flex"
    }
  }, [])
  //Filter data
  const [WorkingStateFilter, setWorkingStateFilter] = useState<WorkingStateType>("Tất cả")
  const dataAfterFirstFilter = state.data.filter((item) => {
    if (WorkingStateFilter === "Tất cả") {
      return true
    } else return item.WorkingState === WorkingStateFilter
  })
  return (
    <>
      <div className={styles.device} style={{ paddingRight: "2rem" }}>
        <div>Danh sách thiết bị</div>
        <div>
          <div className='select'>
            <SelectC
              onChange={(value) => { setWorkingStateFilter((Wstate) => Wstate = value as WorkingStateType) }}
              label='Trạng thái hoạt động'
              defaultValue="Tất cả"
              style={{ width: "14rem" }}>
              <Option value="Tất cả">Tất cả</Option>
              <Option value="Hoạt động">Hoạt động</Option>
              <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </SelectC>
          </div>
          <div className='select'>
          </div>
        </div>
        <br />
        <div ref={ref}>
          <TableC
            columns={tableColumn}
            dataSource={dataAfterFirstFilter}
            pagination={{ total: 100, showSizeChanger: false }}
          />
        </div>
      </div>
      <div ref={addRef} className={styles.Add} onClick={() => { navigate("DeviceAdd") }}><AiFillPlusSquare /><span>Thêm thiết bị</span></div>
    </>
  )
}
type WorkingStateType = "Hoạt động" | "Ngưng hoạt động" | "Tất cả"