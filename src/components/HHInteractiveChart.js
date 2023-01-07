import { useState} from 'react';
import HHChart from './HHChart';
import MySlider from './MyStyledSlider';
import colorChoices from '../colorChoices';
import '../App.css';

const PassiveMembraneInteractiveChart = ({_classNameComponents}) => {

    const [Ivalue, setIValue] = useState(0);
    const [Tvalue, setTValue] = useState(25);
    const [Svalue, setSValue] = useState(10);

    const updateIVal = (e, v) => {
        setIValue(v);
    }

    const updateTVal = (e, v) => {
        setTValue(v);
      }
    
      const updateSVal = (e, v) => {
        setSValue(v);
      }
     
    

    return (
        <div className={_classNameComponents}>
            <HHChart Iinj={Ivalue} totalTime={Tvalue} stimDur={Svalue} />
            <MySlider key="201" label={"Injected Current (mA)"} trackColor={colorChoices['Iinj']} min={-30} max={90} value={Ivalue} onChange={updateIVal}/>
            <MySlider key="202"  label={"Simulation Time (ms)"} trackColor={colorChoices['simulation_time']} min={0} max={200} value={Tvalue} onChange={updateTVal} />
            <MySlider key="203"  label={"Stimulus Duration (ms)"} trackColor={colorChoices['stimulus_duration']} min={0} max={200} value={Svalue} onChange={updateSVal} />
        </div>
    )
    
}


export default PassiveMembraneInteractiveChart;