export default function LandingPage() {
    return (
        <>
            <main className="main-page">
                <section className="top">
                    <div className="group">
                        <div className="currently-showing true">For you</div>
                        <div className="currently-showing">Following</div>
                    </div>
                    <hr />
                </section>

                <section className="stories">
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                    <div className="user-example">
                        <img src="profile" alt="" />
                        <p>Sigmaboy</p>
                    </div>
                </section>

                <section className="feed">
                    <div className="top-feed">
                        <hr />
                        <img src="profile"/>
                        <p>name</p>
                        <p>*</p>
                        <p>2d</p>
                    </div>

                    <div className="main-feed">
                        <img src="image"/>
                    </div>
                    
                    <div className="bottom-feed">
                        <div className="buttons">
                            <div className="buttons-left">
                                <button><img src="" alt="" /></button>
                                <button><img src="" alt="" /></button>
                                <button><img src="" alt="" /></button>
                            </div>
                            <div className="buttons-right">
                                <button><img src="" alt="" /></button>
                            </div>
                        </div>
                        <div className="feed-info">
                            <p>65 likes</p>
                            <p>description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi recusandae sint soluta hic tempora accusantium obcaecati, fuga, possimus cumque laboriosam error repudiandae corporis ducimus dicta voluptate aspernatur magni vitae nisi?</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}