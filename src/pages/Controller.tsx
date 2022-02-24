import SceneBtns from '../components/Scenes/SceneBtns';
import DoubleSlider from '../components/Sliders/DoubleSlider';
import PresetBtnGrp from '../components/Presets/PresetBtnGrp';
import Slider from '../components/Sliders/Slider';
import Card from '../components/UI/Card';

import { useStore } from '../store/store';
import classes from './Controller.module.css';

const Controller: React.FC<{ className?: string }> = (props) => {
  const globalState = useStore()[0];

  return (
    <>
      <SceneBtns action='recallScene' />
      <PresetBtnGrp action='recallPreset' />
      <Card className={`${classes} ${props.className}`}>
        <Slider className={`${classes} ${props.className}`} />
        <DoubleSlider
          className={`${classes} ${props.className}`}
          xMax='24'
          yMax='20'
          resolution={globalState.ptzSettings.resolution}
        />
      </Card>
    </>
  );
};

export default Controller;
