import React, { useRef } from 'react';

import { useStore } from '../../store/store';
import Input from '../UI/Input';
import Card from '../UI/Card';

import classes from './AddPreset.module.css';

const AddPreset: React.FC<{ className?: string }> = (props) => {
  const dispatch = useStore()[1];
  const nameInputRef = useRef<HTMLInputElement>(null);
  // const idInputRef = useRef<HTMLInputElement>(null);

  const addPresetHandler = () => {
    if (nameInputRef.current?.value) {
      const name = nameInputRef.current.value;
      dispatch('ADD_PRESET', name);
    }
  };

  return (
    <>
      <Card>
        <h3 className={`${classes.h3} ${props.className}`}>Add A New Preset</h3>
        <p>Adjust the camera to the desired settings before clicking "+ Add"</p>
        <form className={`${classes.form} ${props.className}`}>
          <Input
            ref={nameInputRef}
            label='name'
            input={{
              id: 'name',
              type: 'text',
            }}
          />
          <button type='button' onClick={addPresetHandler}>
            + Add
          </button>
        </form>
      </Card>
    </>
  );
};

export default AddPreset;
