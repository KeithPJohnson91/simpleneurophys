import { useState} from 'react';
import HHInteractiveChart from './components/HHInteractiveChart';
import HHInteractiveChartV from './components/HHInteractiveChartV';
import PassiveMembraneInteractiveChart from './components/PassiveMembraneInteractiveChart';
import Navbar from './components/Navbar';
import './App.css';
import colorChoices from './colorChoices';


function App() {

  
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
 

  const _classNameComponents = "App-body";
  
  return (
    
    <div className="App">
      
    
    <Navbar />
    <body className="App-body">

      <HHInteractiveChart _classNameComponents={_classNameComponents}/>
      <HHInteractiveChartV _classNameComponents={_classNameComponents}/>    
      <PassiveMembraneInteractiveChart _classNameComponents={_classNameComponents}/>
    </body>

    </div>
  );
}

export default App;
