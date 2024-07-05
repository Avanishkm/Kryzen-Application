import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css";

const Login = () => {
//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
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
        {/* <Link to={"/login"}>
            <button className="btn btn-primary">Register</button>
          </Link> */}
        <form>
          {/* <center>
            <input
              type="name"
              className="register_name"
              placeholder="User Name"
            //   value={userName}
              // onChange={handleusername}
            //   onChange={(e) => setUserName(e.target.value)}
              required
            />
          </center> */}

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
            <Link to={"/"}>
            <button
              type="submit"
              className="register_register"
            //   onClick={(e) => {
            //     e.preventDefault();
            //     SignUp()
            //   }}
              // onClick={register}
            >
              Login
            </button>
            </Link>
            
          </center>
          <center>
            {/* <Link to={"/Register"}>
              <p className="register_login">Already have an account?</p>
            </Link> */}
          </center>
        </form>
      </div>
      
    </div>
        </div>
    </div>
  )
}

export default Login