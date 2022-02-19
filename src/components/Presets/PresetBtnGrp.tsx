import React from 'react';
import Card from '../UI/Card';

import { useStore } from '../../store/store';
import { PresetState } from '../../store/presets-store';
import Preset from './Preset';
import { recallPreset } from '../../util/http-requests';
import classes from './PresetBtnGrp.module.css';

const PresetBtnGrp: React.FC<{}> = (props) => {
  const [state, dispatch] = useStore();
  const presets: PresetState[] = state.presets;

  const recallPresetHandler = (id: number) => {
    recallPreset(id.toString());
    dispatch('CURRENT_PRESET', id);
  };

  const presetList =
    presets.length > 0 ? (
      presets.map(
        (preset: PresetState) =>
          preset.isShow && (
            <Preset
              className={`${classes.btn} `}
              key={preset.id}
              id={preset.id}
              name={preset.name}
              isShow={preset.isShow}
              isCurrent={preset.isCurrent}
              onRecallPreset={() => recallPresetHandler(preset.id)}
            >
              {preset.name}
            </Preset>
          )
      )
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
