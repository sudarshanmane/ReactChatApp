import React from "react";

const Register = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Lama Chat</span>
          <span className="title">Register </span>
          <form action="">
            <input type="text" placeholder="Display Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="file" placeholder="File" />
            <p>You do no have an account? Login</p>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
