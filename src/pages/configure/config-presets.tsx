import React from 'react';

import PresetBtnGrp from '../../components/Presets/PresetBtnGrp';
import AddPreset from '../../components/Presets/AddPreset';
import Card from '../../components/UI/Card';
import Zoom from '../../components/Sliders/Slider';
import PtzPad from '../../components/Sliders/DoubleSlider';

import { useStore } from '../../store/store';
import classes from './Config-presets.module.css';

const ConfigPrests: React.FC<{ className?: string }> = (props) => {
  const globalState = useStore()[0];

  return (
    <>
      <h1>Configure Presets</h1>
      <PresetBtnGrp action='toggleShow' />
      <PresetBtnGrp action='toggleShow' list='showHidden' />
      <AddPreset />
      <Card>
        <Zoom className={`${classes} ${props.className}`} />
        <PtzPad
          className={`${classes} ${props.className}`}
          xMax='24'
          yMax='24'
          resolution={globalState.ptzSettings.resolution}
        />
      </Card>
    </>
  );
};

export default ConfigPrests;
