import {useState} from "react";
import "./Login.css";

function Login(props) {
 const [applyActive,setApplyActive]=useState(false)
  const applyActiveClass = (active) => {
    setApplyActive(active);
  }
  return (
        <div className={`container ${applyActive ? `active` : ``}`}  id="container">
        <div className="form-container sign-up">
          <form >
            <h1>Register Your Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>Or use your email for registration</span>
            {/*<input type="text" placeholder="Name"/>*/}
              <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                  <button>Sign Up Please !</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In Here !</h1>
            <div className="social-icons">
              <a href="" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>Or use your email password</span>
            <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <button>Sign In Here !</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={()=>applyActiveClass(false)}>Sign In Here !</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Team!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" id="register" onClick={()=>applyActiveClass(true)}>Sign Up Please !</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
