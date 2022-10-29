import React from 'react';
// import Button from '../UI/Button';
import Button from '@mui/material/Button';

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
    const recallPresetHandler = (id: number) => {
        props.onRecallPreset(id);
    };

    return (
        <Button
            variant='contained'
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
