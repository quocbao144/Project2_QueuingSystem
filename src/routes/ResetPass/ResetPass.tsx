import React, { useState } from 'react'
import ComfirmEmail from './components/ComfirmEmail'
import ComfirmPass from './components/ComfirmPass'
import img2 from './../../images/Frame.png'
import styles from './styles.module.css'
function ResetPass() {
  const [isComfirmPass, setisComfirmPass] = useState(false)
  const handleComfirmPass = () => {
    setisComfirmPass(!isComfirmPass)
  }
  return (
    <div className={styles.Layout}>
      <>{isComfirmPass ? <ComfirmPass /> : <ComfirmEmail handleNext={handleComfirmPass}/>}</>
      <div><img src={img2} alt="Hinh 2" /></div>
    </div>
  )
}

export default React.memo(ResetPass)

