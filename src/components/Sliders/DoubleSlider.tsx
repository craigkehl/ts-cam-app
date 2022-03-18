import React, { useEffect, useCallback, useState } from 'react';
import { move } from '../../util/http-requests';
import classes from './DoubleSlider.module.css';

interface DoubleSliderProps {
  className: string;
  xMax: string;
  yMax: string;
  resolution: number;
}

const DoubleSlider: React.FC<DoubleSliderProps> = (props) => {
  const [rate, setRate] = useState(() => {
    const resolution = props.resolution;
    const xMax = parseInt(props.xMax) * resolution;
    const yMax = parseInt(props.yMax) * resolution;
    return {
      x: 0,
      y: 0,
      xMax,
      yMax,
      resolution: resolution,
    };
  });

  const touchHandler = useCallback((e) => {
    e.preventDefault();

    // calculate touch input relative to target's center dimensions
    if (e.touches) {
      const inputX = Math.floor(
        e.touches[0].pageX -
          e.currentTarget.offsetLeft -
          e.currentTarget.offsetWidth / 2
      );
      const inputY = Math.floor(
        e.touches[0].pageY -
          e.currentTarget.offsetTop -
          e.currentTarget.offsetHeight / 2
      );

      setRate((prevRate) => {
        // Get each rate steps size
        const xDivSize = e.currentTarget.offsetWidth / 2 / prevRate.xMax;
        const yDivSize = e.currentTarget.offsetHeight / 2 / prevRate.yMax;

        // Calc rate
        const xRate = Math.floor(inputX / xDivSize);
        const xRateChecked =
          xRate > prevRate.xMax
            ? prevRate.xMax
            : xRate < prevRate.xMax * -1
            ? prevRate.xMax * -1
            : xRate;

        // Limit rate to max, add negative to lower & left rate
        const yRate = Math.floor(inputY / yDivSize);
        const yRateChecked =
          yRate > prevRate.yMax
            ? prevRate.yMax
            : yRate < prevRate.yMax * -1
            ? prevRate.yMax * -1
            : yRate;

        if (prevRate.x !== xRateChecked || prevRate.y !== yRateChecked) {
          return {
            ...prevRate,
            x: xRateChecked,
            y: yRateChecked,
          };
        }
        return prevRate;
      });
    }
  }, []);

  const touchEndHandler = useCallback(() => {
    setRate((prevRate) => {
      return {
        ...prevRate,
        x: 0,
        y: 0,
      };
    });
  }, []);

  useEffect(() => {
    move(
      Math.floor(rate.x / rate.resolution).toString(),
      Math.floor(rate.y / rate.resolution).toString()
    );
  }, [rate]);

  useEffect(() => {
    const elem = document.getElementById('dblSlider')!;
    elem.addEventListener('touchstart', touchHandler, false);
    elem.addEventListener('touchmove', touchHandler, false);
    elem.addEventListener('touchend', touchEndHandler, false);

    return () => {
      elem.removeEventListener('touchstart', touchHandler);
      elem.removeEventListener('touchmove', touchHandler);
      elem.removeEventListener('touchend', touchEndHandler);
    };
  }, [touchEndHandler, touchHandler]);

  return (
    <>
      <h3>Pan and Tilt</h3>
      <div id='dblSlider' className={classes.dblSlider} />
    </>
  );
};

export default DoubleSlider;
