import React from 'react';
import Button from '../UI/Button';

import classes from './Preset.module.css';

interface PresetProps extends React.PropsWithChildren<object> {
  className?: string;
  id: number;
  name: string;
  isShow: boolean;
  isCurrent: boolean;
  onRecallPreset: (id: number) => void;
}

const Preset = React.memo((props: PresetProps) => {
  // const dispatch = useStore(false)[1];

  const recallPresetHandler = (id: number) => {
    // recallPreset(id.toString());
    // dispatch('CURRENT_PRESET', props.id);
    props.onRecallPreset(id);
  };

  return (
    <Button
      className={`${classes.btn} ${props.className} ${
        props.isCurrent && classes.selected
      }`}
      onClick={() => recallPresetHandler(props.id)}
    >
      {props.name}
    </Button>
  );
});

export default Preset;
