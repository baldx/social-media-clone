function Link({icon, title}) {

    return (
        <>
            <section id="tab">
            <i className="material-icons" id="material-icons">{icon}</i>
                <a href="">{title}</a>
            </section>
        </>
    )
}

export default Link;