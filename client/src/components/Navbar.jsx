import Link from './Link.jsx';
import ElderBond from '../assets/ElderBondLogo.png';

function Navbar() {
    return ( //code to add the links to the navbar
        <>
        <nav>
            <div id="title">Elder bond</div>
            
            <Link icon={"home"} title={"Home"} />

            <Link icon={"explore"} title={"Explore"} />

            <Link icon={"chat_bubble"} title={"Messages"} />

            <Link icon={"account_circle"} title={"Profile"} />
        </nav>
        </>
    )
}

export default Navbar;