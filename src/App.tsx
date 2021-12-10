import React, { Fragment } from 'react'
import SceneBtns from './components/Scenes/SceneBtns'
import DoubleSlider from './components/Sliders/DoubleSlider'
import PresetBtnGrp from './components/Presets/PresetBtnGrp'
import Slider from './components/Sliders/Slider'
import Card from './components/UI/Card'

import classes from './App.module.css'

const App: React.FC<{className: string}> = (props) => {
  return (
    <Fragment>
      <Card className={`${classes} ${props.className}`}>
        <SceneBtns />
      </Card>
      <PresetBtnGrp />
      <Card className={`${classes} ${props.className}`}>
        <Slider />
        <DoubleSlider xMax='24' yMax='20' />
      </Card>
    </Fragment>
  )
}

export default App
