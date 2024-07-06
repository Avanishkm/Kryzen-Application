import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css";

const Login = () => {
  return (
    <div className="register">
        <div className="registerWrapper">
        <div className="registerLeft">
                <h3 className="registerLogo">Kryzen</h3>
            </div>

            <div className="register">
      
      <div className="register_container">
        <h1>Login</h1>
        <p>It's quick and easy</p>
        <div className="hr3"></div>
        <form>

          <center>
            <input
              type="email"
              className="register_name"
              placeholder="Email"
              required
            />
          </center>
          <center>
            <input
              type="password"
              className="register_name"
              placeholder="Password"
              required
            />
          </center>

          <center>
            <Link to={"/"}>
            <button
              type="submit"
              className="register_register"
            >
              Login
            </button>
            </Link>
            
          </center>
          <center>
            <Link to={"/register"}>
              <p className="register_login">Create Account?</p>
            </Link>
          </center>
        </form>
      </div>
      
    </div>
        </div>
    </div>
  )
}

export default Login