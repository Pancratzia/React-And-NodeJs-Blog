import * as React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>

        <input required type="email" placeholder="Email" />
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />

        <button>Register</button>

        <p>Error Message!</p>

        <span>
          Do you have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
