import React from 'react'
import classes from './Button.module.css'

const Button: React.FC<{ className: string, onClick: () => void }> = (props) => {
  return (
    <span className={`${classes.button} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </span>
  )
}

export default Button
