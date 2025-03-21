function Link({icon, title}) {

    return ( //component for links. adds title and icon to the link
        <>
            <section id="tab"> 
            <i className="material-icons" id="material-icons">{icon}</i>
                <a href="">{title}</a>
            </section>
        </>
    )
}

export default Link;