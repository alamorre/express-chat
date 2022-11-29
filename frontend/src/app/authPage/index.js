import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  // Error handling
  const [error, setError] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: username,
        secret: password,
      })
      .then((r) => props.callback({ ...r.data, secret: password }))
      .catch((e) => setError(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        username: username,
        secret: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
      })
      .then((r) => props.callback({ ...r.data, secret: password }))
      .catch((e) => setError(JSON.stringify(e.response.data)));
  };

  return (
    <div style={{ margin: "24px" }}>
      {/* Login Form */}
      <form onSubmit={onLogin}>
        <h3>Login</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>

      {/* Sign Up Form */}
      <form onSubmit={onSignup}>
        <h3>or Sign Up</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          First name:
          <input
            type="text"
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            name="last_name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default AuthPage;
