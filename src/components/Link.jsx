function Link({icon, title}) {

    return (
        <>
            <section className="tab">
            <i className="material-icons">{icon}</i>
                <h1>{title}</h1>
            </section>
        </>
    )
}

export default Link;