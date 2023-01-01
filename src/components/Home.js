import { MuiCard } from "./MUICard";

const passiveDescription = "Simulation of current injection into passive membrane (RC circuit)";
const hhDescription = "Simulation of current injection into Hodgkin & Huxley membrane patch";
const hhvDescription = "Simulation of voltage clamp of Hodgkin & Huxley membrane patch";

const Home = ({_classNameComponents}) => {
    return (
        <div className={_classNameComponents}>
            <h1 className="App-navbar">Simple Neurophysiology Simulations</h1>
            <ul>
                <li>
                    <a href="/passive">
                        <MuiCard Title={'Passive Membrane'} Content={passiveDescription} BG={"#fe00fe"}/>
                    </a>
                </li>
                <li>
                    <a href="/hh">
                        <MuiCard Title={'Hodgkin & Huxley Model (Current Clamp)'} Content={hhDescription} BG={"#defe47"}/>
                    </a>
                </li>
                <li>
                    <a href="/hhv">
                        <MuiCard Title={'Hodgkin & Huxley Model (Voltage Clamp)'} Content={hhvDescription} BG={"#00b3fe"}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Home;