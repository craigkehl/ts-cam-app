import React, { useEffect, useCallback, useState } from 'react'
import { move } from '../../util/http-requests'
import classes from './DoubleSlider.module.css'

const DoubleSlider: React.FC<{xMax: string, yMax: string}> = (props) => {
  const [rate, setRate] = useState({
    x: 0,
    y: 0,
    xMax: parseInt(props.xMax),
    yMax: parseInt(props.yMax),
  })

  const touchHandler = useCallback((e) => {
    e.preventDefault()
    if (e.touches) {
      const inputX = Math.floor(
        e.touches[0].pageX -
          e.currentTarget.offsetLeft -
          e.currentTarget.offsetWidth / 2
      )
      const inputY = Math.floor(
        e.touches[0].pageY -
          e.currentTarget.offsetTop -
          e.currentTarget.offsetHeight / 2
      )

      setRate((rate) => {
        const xDivSize = e.currentTarget.offsetWidth / (rate.xMax * 2)
        const yDivSize = e.currentTarget.offsetHeight / (rate.yMax * 2)

        const xRate = Math.floor(inputX / xDivSize) * -1
        const xRateChecked =
          xRate > rate.xMax
            ? rate.xMax
            : xRate < rate.xMax * -1
            ? rate.xMax * -1
            : xRate

        const yRate = Math.floor(inputY / yDivSize) * -1
        const yRateChecked =
          yRate > rate.yMax
            ? rate.yMax
            : yRate < rate.yMax * -1
            ? rate.yMax * -1
            : yRate

        if (rate.x !== xRateChecked || rate.y !== yRateChecked) {
          return {
            x: xRateChecked,
            y: yRateChecked,
            xMax: rate.xMax,
            yMax: rate.yMax,
          }
        }
        return rate
      })
    }
  }, [])

  const touchEndHandler = useCallback(() => {
    setRate((rate) => {
      return {
        ...rate,
        x: 0,
        y: 0,
      }
    })
  }, [])

  useEffect(() => {
    move(rate.x, rate.y)
  }, [rate])

  useEffect(() => {
    const elem = document.getElementById('dblSlider')!
    elem.addEventListener('touchstart', touchHandler, false)
    elem.addEventListener('touchmove', touchHandler, false)
    elem.addEventListener('touchend', touchEndHandler, false)

    return () => {
      elem.removeEventListener('touchstart', touchHandler)
      elem.removeEventListener('touchmove', touchHandler)
      elem.removeEventListener('touchend', touchEndHandler)
    }
  }, [touchEndHandler, touchHandler])

  return <div id='dblSlider' className={classes.dblSlider} />
}

export default DoubleSlider
