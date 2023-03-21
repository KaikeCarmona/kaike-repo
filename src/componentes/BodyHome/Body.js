import "./Body.css";
import Avatar from "../../images/Avatar.png"

export default function Home() {
  return (
    <div id="home">
      <div className="apresentation">
        <div className="text">
          <p className="text-green">Hello There,<br/> im<span style={{color: '#A6D866'}}> Kaike Carmona</span></p>
          <p className="text-red">I am a <span style={{color: '#E51E1E'}}>Web Developer!</span></p>
          <a href="/Projects"><div className="button"><p>My Projects</p></div></a>
        </div>
      </div>
      <div className="img">
        <img src={Avatar}></img>
        <p className="img-name">Kaike Carmona</p>
        <a href="/Projects"><p className="button-mobile">My Projects</p></a>
      </div>
    </div>
  );
}
 
