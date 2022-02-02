const LoginPage = () => {
    return (
    <div>
        <h1>Simple Chat App</h1>
        <div>
            <form>
                <label for="uName">Username</label> <input type="text" name="uName"/>
                <label for="pass">Password</label> <input type="password" name="pass"/>
                <button>Log in</button>
            </form>
            <p>No Account? <a href="#">Sign up Here</a></p>
        </div>
    </div>
    );
}
 
export default LoginPage;