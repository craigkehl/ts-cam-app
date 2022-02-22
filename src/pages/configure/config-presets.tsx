import React from 'react';
import PresetBtnGrp from '../../components/Presets/PresetBtnGrp';

const ConfigController: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <h1>Configure Presets</h1>
      <h2 className='inline'>Visible</h2>
      <h4 className='inline'>Click a preset to hide it</h4>
      <PresetBtnGrp action='toggleShow' />
      <h2 className='inline'>Hidden</h2>
      <h4 className='inline'>Click a preset to restore it</h4>
      <PresetBtnGrp action='toggleShow' list='showHidden' />
    </>
  );
};

export default ConfigController;
