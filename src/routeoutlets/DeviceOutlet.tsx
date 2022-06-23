import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../redux/hook'
import { getDevice } from '../routes/Device/actions'
export default function DeviceOutlet() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getDevice())
  },[])
  return (
    <Outlet />
  )
}
