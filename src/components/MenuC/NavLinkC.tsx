import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./styles.module.css";

export default function NavLinkC({ to, children, iconMenu}: propType) {
  return (
    <NavLink
      // end
      to={to}
      className={({ isActive }) => isActive ? `${styles.menuNavSelect} ${styles.menuNav}` : `${styles.menuNav}`}
    >
      {iconMenu}<span>{children}</span>
    </NavLink>
  )
}
type propType = {
  to: string
  children: React.ReactNode
  iconMenu?:ReactElement
}