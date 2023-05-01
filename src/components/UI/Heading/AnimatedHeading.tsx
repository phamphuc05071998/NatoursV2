import React from 'react'
import './../../globalStyles/GlobalStyles.scss'
import styles from "./AnimatedHeading.module.scss"
interface Props {
    children: string;
    marginTop?: string;
    center? :boolean;
    marginBottom?:string

}
const AnimatedHeading:React.FC<Props> = ({children , marginTop, center,  marginBottom}) => {

    const classes = `u-margin-bottom-big ${center ? styles.center :''}`
  return (
    <div className={classes} style={{marginTop, marginBottom}}>
    <h2 className="heading-secondary">{children}</h2>
  </div>
  )
}

export default AnimatedHeading