import React, { ReactElement, ReactSVG, useEffect, useRef } from 'react'
import NavLinkC from './NavLinkC'
import styles from "./styles.module.css"
export default function SubMenuC({children, subTitle, iconExpand, iconMenu}: propType) {
  const ref = useRef<HTMLDivElement>(null)
  const handleClickOutside = (e:MouseEvent) => {
    if(ref.current && ref.current.contains(e.target as Node)) {
      ref.current.parentElement?.classList.add(`${styles.subMenuActive}`)
    } else ref.current?.parentElement?.classList.remove(`${styles.subMenuActive}`)
  }
  useEffect(() => {
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])
  return (
    <div className={styles.subMenu}>
      <div>{iconMenu}<span>{subTitle}</span>{iconExpand}</div>
      <div ref={ref}>{children}</div>
    </div>
  )
}
type propType = {
  children: Array<ReactElement<typeof NavLinkC>>
  subTitle: string
  iconExpand?: ReactElement
  iconMenu?:ReactElement
}