export default function Navbar(){
    return <nav className="App-navbar">
        <a className="home-link" href="/">Simple Neurophys</a>
        <ul>
            <li>
                <a href="/passive">Passive Membrane</a>
            </li>
            <li>
                <a href="/hh">Hodgkin & Huxley (Current)</a>
            </li>
            <li>
                <a href="/hhv">Hodgkin & Huxley (Voltage)</a>
            </li>
        </ul>
    </nav>
}