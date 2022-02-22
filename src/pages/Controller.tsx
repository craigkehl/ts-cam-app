import SceneBtns from '../components/Scenes/SceneBtns';
import DoubleSlider from '../components/Sliders/DoubleSlider';
import PresetBtnGrp from '../components/Presets/PresetBtnGrp';
import Slider from '../components/Sliders/Slider';
import Card from '../components/UI/Card';

import classes from './Controller.module.css';

const Controller: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <Card className={`${classes} ${props.className}`}>
        <SceneBtns />
      </Card>
      <PresetBtnGrp action='recallPreset' />
      <Card className={`${classes} ${props.className}`}>
        <Slider className={`${classes} ${props.className}`} />
        <DoubleSlider
          className={`${classes} ${props.className}`}
          xMax='24'
          yMax='20'
        />
      </Card>
    </>
  );
};

export default Controller;
