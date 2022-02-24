import React from 'react';
import PresetBtnGrp from '../../components/Presets/PresetBtnGrp';

const ConfigPrests: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <h1>Configure Presets</h1>
      <PresetBtnGrp action='toggleShow' />
      <PresetBtnGrp action='toggleShow' list='showHidden' />
    </>
  );
};

export default ConfigPrests;
