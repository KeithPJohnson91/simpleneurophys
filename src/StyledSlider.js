import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  },
  thumb: {
    background: "red",
    "&~&": {
      background: "green"
    }
  },
  mark: {
    background: "black",
    label: "white"
  },
  rail: {
    background: "linear-gradient(to right, red, red 50%, green 50%, green);"
  },
  track: {
    background: "orange"
  },
  valueLabel: {
    "&>*": {
      background: "black"
    }
  }
}));

export default function DiscreteSlider() {
  const classes = useStyles();
  const [value, setValue] = useState([30, 70]);

  const onChange = (e, value) => {
    const [min, max] = value;
    if (max >= 50 && min <= 50 && max !== min) {
      setValue(value);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
          valueLabel: classes.valueLabel,
          mark: classes.mark
        }}
        valueLabelDisplay="auto"
        value={value}
        step={10}
        marks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(i => ({
          label: i,
          value: i
        }))}
        min={0}
        max={100}
        onChange={onChange}
      />
    </div>
  );
}
