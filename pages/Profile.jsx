import profileImg from "../assets/profile.png";

function Profile() {
  return (
    <div className="profile-container">
      <h2 className="profile-heading">Account Settings</h2>

      <div className="profile-card">
        <div className="profile-info">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-image"
          />

          <div className="profile-details">
            <h3>Marry Doe</h3>
            <p>marrydoe@gmail.com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </p>
      </div>
    </div>
  );
}

export default Profile;