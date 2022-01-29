import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { recallPreset } from "../../util/http-requests";

import classes from "./PresetBtnGrp.module.css";

const presetArray = [
  "All Stage",
  "Low Podium",
  "Med Podium",
  "Wide Podium",
  "Very Wide",
  "Center Stage",
  "Audience",
  "Piano",
  "Conductor",
  "Organ",
  "Left Stage",
  "Right Stage",
  "Right Wide",
  "Left Low",
  "Right Low",
];

const PresetBtnGrp: React.FC<{}> = (props) => {

  const recallPresetHandler: (key: number) => void = (key) => {
    recallPreset(key.toString());
  };

  const presetList = (
    presetArray.length > 0 ? (
      presetArray.map((name, index) => (
        <Button
          className={classes.btn}
          key={index}
          onClick={() => recallPresetHandler(index)}>
          {name}
        </Button>
      ))
    ) : (
      <p>No presets found.</p>
    )
  );

  return (
    <Card className={classes.card}>
      <div className={classes.btnGrp}>{presetList}</div>
    </Card>
  );
};

export default PresetBtnGrp;
