import Title from './Link.jsx';
import ElderBond from '../assets/ElderBondLogo.png';

function Navbar() {
    return ( //code to add the links to the navbar
        <>
        <nav>
            <div id="title">Elder bond</div>
            
            <Title icon={"home"} title={"Home"} />

            <Title icon={"explore"} title={"Explore"} />

            <Title icon={"chat_bubble"} title={"Messages"} />

            <Title icon={"account_circle"} title={"Profile"} />
        </nav>
        </>
    )
}

export default Navbar;