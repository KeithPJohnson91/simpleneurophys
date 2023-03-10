import { useState, useEffect } from 'react';
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

    useEffect(() => {
        const metaTag = document.createElement('meta');
        metaTag.name = "description";
        metaTag.content = "Interactive simulation of current injection into a passive membrane (RC-Circuit)";
        document.head.appendChild(metaTag);
    })

    return (
        <div className={_classNameComponents}>
            <PassiveMembraneChart Iinj={Ivalue} V0={0} R={Rvalue} C={Cvalue} />
            <MySlider key="101" label={"Injected Current"} trackColor={colorChoices['Iinj']} min={-40} max={100} value={Ivalue} onChange={updateIVal}/>
            <MySlider key="102" label={"Rm"} trackColor={colorChoices['Ir']} min={0.1} max={12} value={Rvalue} onChange={updateRVal}/>
            <MySlider key="103" label={"Cm"} trackColor={colorChoices['Ic']} min={0} max={20} value={Cvalue} onChange={updateCVal}/>
        </div>
    )
    
}


export default PassiveMembraneInteractiveChart;