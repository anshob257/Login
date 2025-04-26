// src/components/ProfilePage.js
function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <h1>Welcome, {user?.fullname}</h1>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Company: {user?.company}</p>
      <p>Agency: {user?.isAgency}</p>
    </div>
  );
}

export default ProfilePage;
