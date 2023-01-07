import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
      height: 80,
      width: 300,
    },
    thumb: {
      height: 24,
      width: 24,
      marginTop: -8,
      marginLeft: -12,
      backgroundColor: "white",
      //"clicked": {
       //   boxShadow: "inherit"
        //}
    },
    mark: {
        background: "white"
      },
    markLabel: {
        color: "white"
    },
    rail: {
      height: 8,
      background: "#575267"
    },
    track: {
      height: 8,
      background: (props) => props.trackColor,
    },
    valueLabel: {
      "&>*": {
          marginTop: 8,
          marginLeft: 12,
          background: (props) => {return props.trackColor !== 'white' ? props.trackColor:'black'},
      }
    }
  });

  function Nested(props) {
    const classes = useStyles(props);
    return classes;
  }

export default function MySlider({ label, trackColor, min, max, value, onChange }) {
  
  
  const classes = Nested({trackColor});
  const maxminstep = Math.round((max-min)/4);

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {label}
      </Typography>
      <Slider
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
          valueLabel: classes.valueLabel,
          mark: classes.mark,
          markLabel: classes.markLabel
        }}
        valueLabelDisplay="auto"
        value={value.toFixed(1)}
        step={.1}
        min={min}
        max={max}
        maxminstep = {maxminstep}
        onChange={onChange}
        marks={[min,min+maxminstep, min+2*maxminstep, min+3*maxminstep, max].map(i => ({
            label: i,
            value: i
          }))}
      />
    </div>
  );
}
