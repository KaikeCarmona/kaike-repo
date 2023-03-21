import "./Footer.css";

import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

 
export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-card">
        <h1>Kaike Carmona Rodrigues</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula consequat
          interdum leo parturient, curabitur nostra sociosqu dapibus. Vel
          facilisis vel lacinia curabitur hendrerit.
        </p>
        <div className="footer-icons">
          <a href="">
            <AiOutlineInstagram className="icons" />
          </a>
          <a href="">
            <AiOutlineFacebook className="icons" />
          </a>
          <a href="">
            <AiOutlineLinkedin className="icons" />
          </a>
          <a href="">
            <AiFillGithub className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /*
  
  
  
  
  
  
  
  
  
  
  <h1>Kaike Carmona Rodrigues</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Diam arcu aliquam
          fusce ac netus vitae. Porta egestas gravida neque, faucibus dui
          facilisis metus pretium. Platea ipsum ullamcorper molestie commodo
          felis semper ligula.
        </p> */
}
