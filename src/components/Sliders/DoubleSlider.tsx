import React, { useEffect, useCallback, useState } from 'react';
import { move } from '../../util/http-requests';
import classes from './DoubleSlider.module.css';

const DoubleSlider: React.FC<{ xMax: string, yMax: string; resolution?: string; }> = (props) => {
  const [ rate, setRate ] = useState(() => {
    const resolution = (props.resolution) ? parseInt(props.resolution) : .5;
    const xMax = parseInt(props.xMax) * resolution;
    const yMax = parseInt(props.yMax) * resolution;
    return {
      x: 0,
      y: 0,
      xMax,
      yMax,
      resolution: resolution
    };
  });

  const touchHandler = useCallback((e) => {
    e.preventDefault();

    // calculate touch input relative to target's center dimensions
    if (e.touches) {
      const inputX = Math.floor(
        e.touches[ 0 ].pageX -
        e.currentTarget.offsetLeft -
        (e.currentTarget.offsetWidth / 2)
      );
      const inputY = Math.floor(
        e.touches[ 0 ].pageY -
        e.currentTarget.offsetTop -
        e.currentTarget.offsetHeight / 2
      );

      setRate((rate) => {
        // Get each rate steps size
        const xDivSize = (e.currentTarget.offsetWidth / 2) / (rate.xMax);
        const yDivSize = (e.currentTarget.offsetHeight / 2) / (rate.yMax);

        // Calc rate
        const xRate = Math.floor(inputX / xDivSize);
        const xRateChecked =
          xRate > rate.xMax
            ? rate.xMax
            : xRate < rate.xMax * -1
              ? rate.xMax * -1
              : xRate;

        // Limit rate to max, add negative to lower & left rate
        const yRate = Math.floor(inputY / yDivSize * -1);
        const yRateChecked =
          yRate > rate.yMax
            ? rate.yMax
            : yRate < rate.yMax * -1
              ? rate.yMax * -1
              : yRate;

        if (rate.x !== xRateChecked || rate.y !== yRateChecked) {
          return {
            x: xRateChecked,
            y: yRateChecked,
            xMax: rate.xMax,
            yMax: rate.yMax,
            resolution: rate.resolution
          };
        }
        return rate;
      });
    }
  }, []);

  const touchEndHandler = useCallback(() => {
    setRate((rate) => {
      return {
        ...rate,
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
  }, [ rate ]);

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
  }, [ touchEndHandler, touchHandler ]);

  return <div id='dblSlider' className={classes.dblSlider} />;
};

export default DoubleSlider;
