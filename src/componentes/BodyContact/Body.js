import "./Body.css";

import In from "../../images/in.png";
import Github from "../../images/github.png";
import Insta from "../../images/insta.png";

export default function ContactBody() {
  return (
    <div className="contact-container">
      <h1 className="contact-us">Contact Us</h1>
      <div className="contact-box">
        <form
          action="https://formsubmit.co/01735b16e61c47e11f247f2fcd016d26"
          method="POST"
          className="contact-box-email"
        >
          <input type="hidden" name="_captcha" value={false}></input>
          <div className="input-single">
            <input required type="text" name="name" className="Name" />
            <label for="Name">Name</label>
          </div>

          <div className="input-single">
            <input required type="Email" name="email" className="Email" />
            <label for="Email">Email</label>
          </div>

          <div className="input-single">
            <input required type="text" name="message" className="Email" />
            <label for="Email">Message</label>
          </div>

          <input type="hidden" name="_next" value="https://kaike-carmona.vercel.app/Contact/Thanks"></input>

          
            <button type="submit">Send</button>
 
        </form>
        <div className="contact-box-contacts">
          <div className="contact-box-contacts-text">
            <h1>Email</h1>
            <p>kkaike371@gmail.com</p>
          </div>
          <div className="contact-box-contacts-text">
            <h1>WhatsApp</h1>
            <p>+55 (11)95491-2832</p>
          </div>
          <div className="contact-box-contacts-icons">
            <a href="https://www.linkedin.com/in/kaike-carmona-76a05b23a/">
              <img src={In} style={{ width: "30px", height: "30px" }}></img>
            </a>
            <a href="https://github.com/KaikeCarmona">
              <img src={Github} style={{ width: "30px", height: "30px" }}></img>
            </a>
            <a href="https://www.instagram.com/k_aik_e/">
              <img src={Insta} style={{ width: "30px", height: "30px" }}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
