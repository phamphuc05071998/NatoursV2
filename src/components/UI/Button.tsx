import React from 'react'
import styles from "./Button.module.scss"
interface Props {
    children?: string,
    color?: string,
    textColor?: string,
    to?: string,
}
export const Button: React.FC<Props> = ({children, color, textColor, to}) => {
  console.log(to)
  return (
    <a href={`#${to}`} className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`} style={{backgroundColor: color, color: textColor}}  >{children} </a>
  )
}
export default Button