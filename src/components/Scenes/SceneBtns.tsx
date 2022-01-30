import React from 'react';
import Button from '../UI/Button';
import { recallScenes } from '../../util/http-requests';

import classes from './SceneBtns.module.css';


const SceneBtns: React.FC<{ className?: string, }> = (props) => {
  const recallSceneHandler: (scene: string) => void = (scene) => {
    recallScenes(scene);
  };

  return (
    <div className={classes.topDiv}>
      <h5 className={`${classes.title} ${props.className}`}>Zoom Source</h5>
      <div className={classes.btnGrp}>
        <Button
          className={`${classes.btn} ${props.className}`}
          key='1'
          onClick={() => recallSceneHandler('Live')}
        >
          Live Cam
        </Button>
        <Button
          className={`${classes.btn} ${props.className}`}
          key='2'
          onClick={() => recallSceneHandler('sacramentPic')}
        >
          Christ's Picture
        </Button>
        <Button
          className={`${classes.btn} ${props.className}`}
          key='3'
          onClick={() => recallSceneHandler('sacramentVideo')}
        >
          Video
        </Button>
      </div>
    </div>
  );
};

export default SceneBtns;
