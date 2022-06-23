import React, { useRef, useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from "./styles.module.css"
export default function InputC({ id,type,errors,children,checkReq, ...rest }: propsType) {
  const [showPass, setshowPass] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleshowPass = (e: React.MouseEvent) => {
    if (!showPass) {
      inputRef.current?.setAttribute("type", "text")
    } else inputRef.current?.setAttribute("type", "password")
    setshowPass(!showPass)
  }
  return (
    <>
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={checkReq?styles.labelReq: undefined}>{children}</label>
      <div>
        <input type={type} id={id} ref={inputRef} {...rest} />
        {type === "password" ? <span onClick={(e) => handleshowPass(e)}>{showPass ? <AiFillEye /> : <AiFillEyeInvisible />}</span> : null}
      </div>
      <p style={{ color: "red", fontSize: "0.8rem" }}>{errors}</p>
    </div>
    </>
  )
}
type propsType = {
  checkReq?: boolean
  errors?: string
} & React.ComponentProps<"input">