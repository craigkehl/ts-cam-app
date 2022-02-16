import React from 'react';
import Card from '../UI/Card';

import { useStore } from '../../store/store';
import { PresetState } from '../../store/presets-store';
import Preset from './Preset';
import classes from './PresetBtnGrp.module.css';

const PresetBtnGrp: React.FC<{}> = (props) => {
  const state = useStore()[0];
  const presets = state.presets;
  console.log(presets);

  const presetList =
    presets.length > 0 ? (
      presets.map((preset: PresetState) => (
        <Preset
          className={`${classes.btn} `}
          key={preset.id}
          id={preset.id}
          name={preset.name}
          isShow={preset.isShow}
          isCurrent={preset.isCurrent}
        >
          {preset.name}
        </Preset>
      ))
    ) : (
      <p>No presets found.</p>
    );

  return (
    <Card className={classes.card}>
      <div className={classes.btnGrp}>{presetList}</div>
    </Card>
  );
};

export default PresetBtnGrp;
