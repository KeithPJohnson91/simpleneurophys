import { useState} from 'react';
//import ApiChart from './components/ApiChart';
import HHChart from './components/HHChart';
import HHChartV from './components/HHChartV';
import PassiveMembraneChart from './components/PassiveMembraneChart';
import Navbar from './components/Navbar';
//import { Slider } from 'material-ui-slider';
//import Slider  from '@material-ui/core/Slider';
//import Box  from '@mui/material/Box';
//import DiscreteSlider from './StyledSlider';
import MySlider from './MyStyledSlider';
import './App.css';
import colorChoices from './colorChoices';
import { Link } from 'react-router-dom';

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

          <PassiveMembraneChart Iinj={Ivalue} V0={0} R={Rvalue} C={Cvalue} />
          <MySlider label={"Injected Current"} trackColor={colorChoices['Iinj']} min={-30} max={100} value={Ivalue} onChange={updateIVal}/>
          <MySlider label={"Rm"} trackColor={colorChoices['Ir']} min={0} max={10} value={Rvalue} onChange={updateRVal}/>
          <MySlider label={"Cm"} trackColor={colorChoices['Ic']} min={0} max={15} value={Cvalue} onChange={updateCVal}/>
    </body>

    </div>
  );
}

export default App;

/*

, useEffect 

const [x, setX] = useState([]);
  const [y, setY] = useState([]);

function transformData(data){
    return { x: data.map(each => each.date_of_interest), y: data.map(each => each.case_count) };
  } 

  useEffect(() => {
    const endpoint = "https://data.cityofnewyork.us/resource/rc75-m7u3.json";
    console.log('fetching');
    fetch(endpoint)
      .then(response => response.json())
      .then(json => transformData(json))
      .then(data => {setX(data['x']); setY(data['y'])});

  }, [])

<Box sx={{
        width: 300,
        height: 50,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}></Box>

      <Slider color='#7700a6' size="medium"  value={value} onChange={updateVal} min={0} max={100} step={1} valueLabelDisplay="on" />
        <div>
        <MySlider />
        </div>

        <ApiChart x={x} y={y} multiplier={value}/>
      */