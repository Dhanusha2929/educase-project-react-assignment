import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="create-account-container">
      <h1 className="create-account-title">
        Create your <br /> PopX account
      </h1>

      <div className="input-group">
        <label>Full Name*</label>
        <input
          type="text"
          placeholder="Marry Doe"
          className="create-input"
        />
      </div>

      <div className="input-group">
        <label>Phone Number*</label>
        <input
          type="text"
          placeholder="Enter phone number"
          className="create-input"
        />
      </div>

      <div className="input-group">
        <label>Email Address*</label>
        <input
          type="email"
          placeholder="MarryDoe@gmail.com"
          className="create-input"
        />
      </div>

      <div className="input-group">
        <label>Password*</label>
        <input
          type="password"
          placeholder="Marry Doe"
          className="create-input"
        />
      </div>

      <div className="input-group">
        <label>Company Name</label>
        <input
          type="text"
          placeholder="Marry Doe"
          className="create-input"
        />
      </div>

      <div className="radio-section">
        <p>Are you an Agency?*</p>

        <label>
          <input type="radio" name="agency" />
          Yes
        </label>

        <label>
          <input type="radio" name="agency" />
          No
        </label>
      </div>

      <Link to="/profile">
        <button className="create-account-btn">
          Create Account
        </button>
      </Link>
    </div>
  );
}

export default CreateAccount;