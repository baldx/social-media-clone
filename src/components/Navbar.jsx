function Navbar() {
    return (
        <>
        <nav>
            <section className="tab">
            <i className="material-icons">home</i>
                Home
            </section>

            <section className="tab">
            <i className="material-icons">explore</i>
                Explore
            </section>
            <section className="tab">
            <i className="material-icons">chat_bubble</i>
                Messages
            </section>
            <section className="tab">
            <i className="material-icons">account_circle</i>
                Profile
            </section>
        </nav>
        </>
    )
}

export default Navbar;