import Home from './components/Home';
import HHInteractiveChart from './components/HHInteractiveChart';
import HHInteractiveChartV from './components/HHInteractiveChartV';
import PassiveMembraneInteractiveChart from './components/PassiveMembraneInteractiveChart';
import Navbar from './components/Navbar';
import './App.css';



function App() {

  const _classNameComponents = "App-body";
  let Component;
  let _header = true;
  switch(window.location.pathname){
    case "/hh":
      Component = HHInteractiveChart
      break
    case "/hhv":
      Component = HHInteractiveChartV
      break
    case "/passive":
      Component = PassiveMembraneInteractiveChart
      break
    default:
      Component = Home
      _header =false
  };

  
  return (
    <div className="App">
      {_header && <Navbar />}
      <Component _classNameComponents={_classNameComponents}/>
    </div>
  );
}

export default App;
