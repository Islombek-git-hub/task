import "./App.css";
import img from "./pexels-tima-miroshnichenko-6914646 1.png";
import logo from "./logo.png";
import PhoneInput from "./PhoneInput";
import google from "./google.png";
import github from "./github.png";
import telegram from "./Telegram.png";
import linkedIn from "./in.png";
import { FaChevronLeft } from "react-icons/fa";
function App() {
  return (
    <div className="task">
      <div className="left">
        <img src={img} alt="img" />
        <div className="left_body">
          <h2>Jonny Wick</h2>
          <p>Product Designer</p>
          <p>Work experience 8 years</p>
          <div className="LB_bottom">
            <span></span>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={logo} alt="logo" className="logo" />

        <div className="right_body">
          <p>
            Welcome Back, Please <br /> log in to Get started
          </p>
          <div className="label_number">Phone number</div>

          <PhoneInput />

          <div className="forgot_phone">Forgot phone number ?</div>

          <div className="btns">
            <div className="inp">
              <div>
                <FaChevronLeft /> Back
              </div>
            </div>
            <div className="inp">
              <div>Next</div>
            </div>
          </div>

          <div className="hr">or log in with</div>

          <div className="social">
            <div className="inp">
              <div>
                <img src={google} alt="google" /> Google
              </div>
            </div>
            <div className="inp">
              <div>
                <img src={linkedIn} alt="linkedin" />
                LinkedIn
              </div>
            </div>
            <div className="inp">
              <div>
                <img src={github} alt="github" />
                GitHub
              </div>
            </div>
            <div className="inp">
              <div>
                <img src={telegram} alt="telegram" /> Telegram
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
