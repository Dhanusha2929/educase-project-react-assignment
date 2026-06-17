import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">
        Sign in to your <br /> PopX account
      </h1>

      <p className="login-text">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="login-input"
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="login-input"
        />
      </div>

      <Link to="/profile">
      <button className="login-submit-btn">
        Login
      </button>
      </Link>
    </div>
  );
}

export default Login;