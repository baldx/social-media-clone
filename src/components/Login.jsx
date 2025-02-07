function LogIn() {
    return (
        <>
            <h1>Create your account!</h1>
            <form action="">
                <label htmlFor="email">
                    Email
                    <input type="text" name="email" id="name" max={20}/>
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" id="password" max={20}/>
                </label>
                <label htmlFor="tos">
                    Accept <a href="">Terms of service</a>
                <input type="checkbox" name="tos" id="tos" />
                </label>
            </form>
        </>

    )
}


export default LogIn;