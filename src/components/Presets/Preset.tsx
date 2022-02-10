import React from 'react';
import Button from '../UI/Button';

import { recallPreset } from '../../util/http-requests';
import classes from './Preset.module.css';

export type Props = {
  className?: string;
  id: number;
  name: string;
  isShow: boolean;
  isCurrent: boolean;
};

const Preset = React.memo((props: Props) => {
  const recallPresetHandler: (key: number) => void = (key) => {
    recallPreset(key.toString());
  };

  return (
    <Button
      className={`${classes.btn} ${props.className}`}
      key={props.id}
      onClick={() => recallPresetHandler(props.id)}
    >
      {props.name}
    </Button>
  );
});

export default Preset;
