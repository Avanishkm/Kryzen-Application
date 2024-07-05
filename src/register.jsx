import React, { useState } from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom'
import "./signup.css";

const Register = () => {
    const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // const [value, setValue] = useState({
    //     name: "",
    //     email: "",
    //     password: ""
    // })

    const handleSubmit = (event) => {
        event.preventdefault();
        // axios.post('http://localhost:8081/register', value)
        // .then(res => console.log(res))
        // .then(err => console.log(err));
    }


  return (
    <div className="register">
        <div className="registerWrapper">
        <div className="registerLeft">
                <h3 className="registerLogo">Kryzen</h3>
            </div>

            <div className="register">
      
      <div className="register_container">
        <h1>Sign Up</h1>
        <p>It's quick and easy</p>
        <div className="hr3"></div>
        {/* <Link to={"/login"}>
            <button className="btn btn-primary">Register</button>
          </Link> */}
        <form onClick={handleSubmit}>
          <center>
            <input
              type="name"
              className="register_name"
              placeholder="User Name"
            //   value={userName}
              // onChange={handleusername}
            //   onChange={(e) => setUserName(e.target.value)}
              required
            />
          </center>

          <center>
            <input
              type="email"
              className="register_name"
              placeholder="Email"
            //   value={email}
              // onChange={handleEmail}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </center>
          <center>
            <input
              type="password"
              className="register_name"
              placeholder="Password"
            //   value={password}
              // onChange={handlePassword}
            //   onChange={(e) => setPassword(e.target.value)}
              required
            />
          </center>

          <center>
            <Link to={"/login"}>
            <button
              type="submit"
              className="register_register"
            //   onClick={(e) => {
            //     e.preventDefault();
            //     SignUp()
            //   }}
              // onClick={register}
            >
              Sign Up
            </button>
            </Link>
            
          </center>
          <center>
            <Link to={"/login"}>
              <p className="register_login">Already have an account?</p>
            </Link>
          </center>
        </form>
      </div>
      
    </div>
        </div>
    </div>
  )
}

export default Register;