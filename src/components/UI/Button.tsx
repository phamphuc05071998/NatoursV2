import React from 'react'
import styles from "./Button.module.scss"
interface Props {
    children?: string
}
export const Button: React.FC<Props> = ({children}) => {
  return (
    <a href="#" className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>{children} </a>
  )
}
export default Button