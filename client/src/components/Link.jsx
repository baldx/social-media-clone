import { Link } from "react-router-dom";

function Title({icon, title}) {

    return ( //component for links. adds title and icon to the link
        <>
            <section id="tab"> 
            <i className="material-icons" id="material-icons">{icon}</i>
                <Link to={title}>{title}</Link>
            </section>
        </>
    )
}

export default Title;