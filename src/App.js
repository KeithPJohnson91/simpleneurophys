import { useState} from 'react';
import HHChart from './components/HHChart';
import HHChartV from './components/HHChartV';
import PassiveMembraneChart from './components/PassiveMembraneChart';
import Navbar from './components/Navbar';
import MySlider from './components/MyStyledSlider';
import './App.css';
import colorChoices from './colorChoices';
import PassiveMembraneInteractiveChart from './components/PassiveMembraneInteractiveChart';


function App() {

  
  const [Ivalue, setIValue] = useState(0);
  const [Tvalue, setTValue] = useState(25);
  const [Svalue, setSValue] = useState(10);
  const [Rvalue, setRValue] = useState(1);
  const [Cvalue, setCValue] = useState(1);

  const updateIVal = (e, v) => {
    setIValue(v);
  }
  const updateTVal = (e, v) => {
    setTValue(v);
  }

  const updateSVal = (e, v) => {
    setSValue(v);
  }
 

  const updateRVal = (e, v) => {
    setRValue(v);
  }
  const updateCVal = (e, v) => {
    setCValue(v);
  }

  const _classNameComponents = "App-body";
  
  return (
    
    <div className="App">
      
    
    <Navbar />
    <body className="App-body">
          <HHChart Iinj={Ivalue} totalTime={Tvalue} stimDur={Svalue} />
          <MySlider label={"Injected Current"} trackColor={colorChoices['Iinj']} min={-30} max={100} value={Ivalue} onChange={updateIVal}/>
          <MySlider label={"Simulation Time"} trackColor={colorChoices['simulation_time']} min={0} max={150} value={Tvalue} onChange={updateTVal} />
          <MySlider label={"Stimulus Duration"} trackColor={colorChoices['stimulus_duration']} min={0} max={150} value={Svalue} onChange={updateSVal} />
      
          <HHChartV Vhold={Ivalue} totalTime={Tvalue} stimDur={Svalue} />
          <MySlider label={"Voltage Step"} trackColor={colorChoices['V']} min={-30} max={100} value={Ivalue} onChange={updateIVal}/>
          <MySlider label={"Simulation Time"} trackColor={colorChoices['simulation_time']} min={0} max={150} value={Tvalue} onChange={updateTVal} />
          <MySlider label={"Stimulus Duration"} trackColor={colorChoices['stimulus_duration']} min={0} max={150} value={Svalue} onChange={updateSVal} />

          <PassiveMembraneInteractiveChart _classNameComponents={_classNameComponents}/>
    </body>

    </div>
  );
}

export default App;
