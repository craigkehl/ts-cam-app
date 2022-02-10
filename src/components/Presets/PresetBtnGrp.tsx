import React from 'react';
import Card from '../UI/Card';

import { useStore } from '../../store/store';
import Preset from './Preset';
import classes from './PresetBtnGrp.module.css';

const PresetBtnGrp: React.FC<{}> = (props) => {
  const obj = useStore()[0];

  // const presetList = (
  //   (presets.length > 0) ? (
  //     presets.map((name, index) => (
  //       <Preset
  //         className={classes.btn}
  //         key={index}
  //         name={name}
  //         >
  //         {name}
  //       </Preset>
  //     ))
  //   ) : (
  //     <p>No presets found.</p>
  //   )
  // );

  return (
    <Card className={classes.card}>
      <div className={classes.btnGrp}>{/* {presetList} */}</div>
    </Card>
  );
};

export default PresetBtnGrp;
