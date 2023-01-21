import { useState, useEffect } from 'react';
import HHChartV from './HHChartV';
import MySlider from './MyStyledSlider';
import colorChoices from '../colorChoices';
import '../App.css';

const PassiveMembraneInteractiveChart = ({_classNameComponents}) => {

    const [Vvalue, setVValue] = useState(0);
    const [Tvalue, setTValue] = useState(25);
    const [Svalue, setSValue] = useState(10);

    const updateVVal = (e, v) => {
        setVValue(v+65);
    }

    const updateTVal = (e, v) => {
        setTValue(v);
      }
    
    const updateSVal = (e, v) => {
        setSValue(v);
    }

    useEffect(() => {
        const metaTag = document.createElement('meta');
        metaTag.name = "description";
        metaTag.content = "Interactive Hodgkin-Huxley model simulation of voltage clamp membrane patch";
        document.head.appendChild(metaTag);
    })

     
    

    return (
        <div className={_classNameComponents}>
            <HHChartV Vhold={Vvalue} totalTime={Tvalue} stimDur={Svalue} />
            <MySlider key="503" label={"Voltage Step (mV)"} trackColor={colorChoices['V']} min={-110} max={10} value={Vvalue-65} onChange={updateVVal}/>
            <MySlider key="504" label={"Simulation Time (ms)"} trackColor={colorChoices['simulation_time']} min={0} max={200} value={Tvalue} onChange={updateTVal} />
            <MySlider key="505" label={"Stimulus Duration (ms)"} trackColor={colorChoices['stimulus_duration']} min={0} max={200} value={Svalue} onChange={updateSVal} />
        </div>
    )
    
}


export default PassiveMembraneInteractiveChart;