import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import { recallScenes } from '../../util/http-requests';
import { useStore } from '../../store/store';
import { SceneState } from '../../store/scenes-store';
import classes from './SceneBtns.module.css';

const SceneBtns: React.FC<{ className?: string }> = (props) => {
  const state = useStore()[0];
  const scenes = state.scenes;

  const recallSceneHandler = (scene: string) => {
    recallScenes(scene);
  };

  const sceneList = (
    <div className={`${classes.btnGrp} ${props.className}`}>
      {scenes.map((scene: SceneState) => (
        <Button
          className={`${classes.btn} ${props.className}`}
          key={scene.name}
          onClick={() => recallSceneHandler(scene.name)}
        >
          {scene.name}
        </Button>
      ))}
    </div>
  );

  return (
    <Card>
      <h3 className={`${classes.title} ${props.className}`}>Current Scenes</h3>
      {sceneList}
    </Card>
  );
};

export default SceneBtns;
