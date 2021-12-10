import React from 'react'
import PanTiltBtnGrp from './PanTiltBtnGrp'
import SpeedCtrl from './SpeedCtrl'
import Card from '../UI/Card'

const PanTilt: React.FC<{type: string, name: string, id: string, min: string, max: string}> = () => {
  return (
    <Card>
      <PanTiltBtnGrp />
      <SpeedCtrl type='range' name='panRate' id='panRate' min='0' max='18'>Pan Rate</SpeedCtrl>
      <SpeedCtrl type='range' name='tiltRate' id='tiltRate' min='0' max='18'>Tilt Rate</SpeedCtrl>
    </Card>
  )
}

export default PanTilt
