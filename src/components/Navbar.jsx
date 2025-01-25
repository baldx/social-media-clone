import Link from './Link.jsx';
import ElderBond from '../assets/ElderBondLogo.png';

function Navbar() {
    return (
        <>
        <nav>
            <h1 className="title">Elder bond</h1>
            
            <Link icon={"home"} title={"Home"} />

            <Link icon={"explore"} title={"Explore"} />

            <Link icon={"chat_bubble"} title={"Messages"} />

            <Link icon={"account_circle"} title={"Profile"} />
        </nav>
        </>
    )
}

export default Navbar;