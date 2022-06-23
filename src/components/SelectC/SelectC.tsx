import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.css";
import { Select, Tag } from 'antd';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
const { Option } = Select;


export default function SelectC({ label, children, ...rest }: propsType) {
  const [click, setclick] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as Node)) {
      setclick((e) => !e)
    } else {
      setclick(false)
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])
  return (
    <>
      <div>
        {label ? <label className={styles.label}>{label}</label> : null}
        <div ref={ref}>
          <Select
            {...rest}
            suffixIcon={click ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
            className={styles.selectC}
            dropdownClassName={styles.dropdown}
          >
            {children}
          </Select>
        </div>
      </div>
    </>
  )
}
type propsType = {
  label?: string
  children: React.ReactNode
} & React.ComponentProps<typeof Select>
export { Option, tagRender }

const tagRender = (props: any) => {
  return (
    <Tag color={"#FF9138"} closable={true} onClose={props.onClose}>{props.value? props.value: null}</Tag>
  )
}
