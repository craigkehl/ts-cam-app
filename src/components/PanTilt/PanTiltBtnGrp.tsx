import React from 'react'
import Button from '../UI/Button'

import ArrowUpLeft from '../../images/arrow-up-left-thick.png'
import ArrowUp from '../../images/arrow-up-thick.png'
import ArrowUpRight from '../../images/arrow-up-right-thick.png'
import ArrowLeft from '../../images/arrow-left-thick.png'
import ArrowRight from '../../images/arrow-right-thick.png'
import ArrowDownLeft from '../../images/arrow-down-left-thick.png'
import ArrowDown from '../../images/arrow-down-thick.png'
import ArrowDownRight from '../../images/arrow-down-right-thick.png'


import classes from './PanTiltBtnGrp.module.css'


const PanTiltBtnGrp: React.FC<{}> = (props) => {
  
  return (
    <div>
      <div className={classes.row}>
        <Button className={classes.btn} >
          <img src={ArrowUpLeft} alt=''/>
        </Button>
        <Button className={classes.btn} >
          <img src={ArrowUp}  alt='' />
        </Button>
        <Button className={classes.btn} >
          <img src={ArrowUpRight}  alt='' />
        </Button>
      </div>
      <div className={classes.row}>
        <Button className={classes.btn} >
          <img src={ArrowLeft}  alt='' />
        </Button>
        <Button className={classes.btn} >
          Home
        </Button>
        <Button className={classes.btn} >
          <img src={ArrowRight}  alt='' />
        </Button>
      </div>
      <div className={classes.row}>
        <Button className={classes.btn} >
          <img src={ArrowDownLeft}  alt='' />
        </Button>
        <Button className={classes.btn} >
          <img src={ArrowDown}  alt='' />
        </Button>
        <Button className={classes.btn} >
          <img src={ArrowDownRight}  alt='' />
        </Button>
      </div>
    </div>
  )
}

export default PanTiltBtnGrp