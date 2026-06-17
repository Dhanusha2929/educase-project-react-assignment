import { Link } from "react-router-dom";
function Welcome() {
    return ( <div className="welcome-container">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <Link to = "/createaccount" >
        <button className="create-btn">Create Account</button>
        </Link>
        <Link to = "/login">
        <button className="login-btn">Already Registered? Login</button>
        </Link>
    </div>)
}

export default Welcome;