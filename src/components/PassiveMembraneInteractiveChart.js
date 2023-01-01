import { useState} from 'react';
import PassiveMembraneChart from './PassiveMembraneChart';
import MySlider from './MyStyledSlider';
import colorChoices from '../colorChoices';
import '../App.css';

const PassiveMembraneInteractiveChart = ({_classNameComponents}) => {

    const [Ivalue, setIValue] = useState(0);
    const updateIVal = (e, v) => {
        setIValue(v);
    }
    const [Rvalue, setRValue] = useState(1);
    const updateRVal = (e, v) => {
        setRValue(v);
    }
      
    const [Cvalue, setCValue] = useState(1);
    const updateCVal = (e, v) => {
        setCValue(v);
    }

    return (
        <div className={_classNameComponents}>
            <PassiveMembraneChart Iinj={Ivalue} V0={0} R={Rvalue} C={Cvalue} />
            <MySlider key="101" label={"Injected Current"} trackColor={colorChoices['Iinj']} min={-30} max={100} value={Ivalue} onChange={updateIVal}/>
            <MySlider key="102" label={"Rm"} trackColor={colorChoices['Ir']} min={0} max={10} value={Rvalue} onChange={updateRVal}/>
            <MySlider key="103" label={"Cm"} trackColor={colorChoices['Ic']} min={0} max={15} value={Cvalue} onChange={updateCVal}/>
        </div>
    )
    
}


export default PassiveMembraneInteractiveChart;