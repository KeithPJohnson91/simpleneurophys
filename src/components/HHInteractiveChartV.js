import { useState} from 'react';
import HHChartV from './HHChartV';
import MySlider from './MyStyledSlider';
import colorChoices from '../colorChoices';
import '../App.css';

const PassiveMembraneInteractiveChart = ({_classNameComponents}) => {

    const [Vvalue, setVValue] = useState(0);
    const [Tvalue, setTValue] = useState(25);
    const [Svalue, setSValue] = useState(10);

    const updateVVal = (e, v) => {
        setVValue(v);
    }

    const updateTVal = (e, v) => {
        setTValue(v);
      }
    
      const updateSVal = (e, v) => {
        setSValue(v);
      }
     
    

    return (
        <div className={_classNameComponents}>
            <HHChartV Vhold={Vvalue} totalTime={Tvalue} stimDur={Svalue} />
            <MySlider key="503" label={"Voltage Step"} trackColor={colorChoices['V']} min={-110} max={10} value={Vvalue-65} onChange={updateVVal}/>
            <MySlider key="504" label={"Simulation Time"} trackColor={colorChoices['simulation_time']} min={0} max={150} value={Tvalue} onChange={updateTVal} />
            <MySlider key="505" label={"Stimulus Duration"} trackColor={colorChoices['stimulus_duration']} min={0} max={150} value={Svalue} onChange={updateSVal} />
        </div>
    )
    
}


export default PassiveMembraneInteractiveChart;