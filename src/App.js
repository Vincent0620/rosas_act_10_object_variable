import logo from './logo.svg';
import './App.css';

function StyleObjectVariable() {
  return (
    <div style={Body}>
      <div style={Body1}>
        <div style={Title}>
          <h3>Object Variable</h3>
        </div>
        <div style={Container}>
          <div style={LoginTitle}>
            <h3>Login Form</h3>
          </div>
          <div>
            <div style={BodyContainer}>
              <form>
                  <input style={Input} type="email" placeholder="Email Address" />
                  <input style={Input} type="password" placeholder="Password" />
                  <button style={Button}>LOGIN</button>
              </form>
              <div style={Half}>
                <div style={Horizontal}>
                  <hr></hr>
                </div>
                <div>
                  <p style={Opacity}>OR</p>
                </div>
                <div style={Horizontal}>
                  <hr></hr>
                </div>
              </div>
              <div style={LogoArrangement}>
                <a href="#"><img style={Logo} src={logo}></img></a>
              
              </div>
              <div style={Footer}>
                <p>No Account?  <a href = "#">Create Account Here!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Body = {width: "auto"};
const Body1 = {width: "750px", margin: "auto", fontFamily: "Comic Sans MS"};
const Title = {margin: "10px", textAlign: "Center"};
const Container = {background: "orange", padding: "6% 0 0",height: "850px", width: "750px"};
const LoginTitle = {height: "10%", textAlign: "Center"};
const BodyContainer = {margin: "10%"};
const Input = {boxSizing: "border-box",width: "100%",marginBottom: "20px",fontSize: "14px", padding: "15px"};
const Button = {width: "100%", padding: "10px" ,backgroundColor: "Green", color: "white", cursor: "pointer"};
const Half = {marginTop: "15px", marginBottom: "15px", display: "flex", alignItems: "Center", justifyContent: "Center"};
const Horizontal = {width: "100%"};
const Opacity = {opacity: "0.6"};
const LogoArrangement = {display: "flex", alignItems: "Center", justifyContent: "space-evenly"};
const Logo = {width: "100px", height: "100px", cursor: "pointer"};
const Footer = {textAlign: "Center", margin: "45px", opacity: "0.8"};

export default StyleObjectVariable;



