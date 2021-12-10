import React, { Fragment } from 'react'

import classes from './SpeedCtrl.module.css'

const SpeedCtrl: React.FC<{name: string, type: string, value?: string, id?: string, min?: string, max?: string}> = (props) => {
  
  return (
    <Fragment>
      <label className={classes.label} htmlFor={props.name}>
        {props.children}
      </label>
      <input
        className={classes.input}
        type={props.type}
        value={props.value}
        name={props.name}
      />
    </Fragment>
  )
}

export default SpeedCtrl
