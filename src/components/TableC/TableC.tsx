import { Table } from 'antd'
import styles from "./styles.module.css";
import React from 'react'

function TableC({...rest }: propsType) {
  return (
    <>
      <Table
        className={styles.tableC}
        {...rest}
        pagination={{ total: 100, pageSize: 10, showSizeChanger: false }} />
    </>
  )
}
type propsType = React.ComponentProps<typeof Table>
export default React.memo(TableC)