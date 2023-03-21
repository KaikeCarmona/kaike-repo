import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

export default function Header() {
  const navRef = useRef();
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "nav" : "nav active"}>
      <header >
        <h3>LOGO</h3>
        <nav ref={navRef}>
          <a href="/">HOME</a>
          <a href="/Projects">PROJECTS</a>
          <a href="/Contact">CONTACT</a>
          <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
    </div>
  );
}

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// import "./style.css";
// import { useState } from "react";

// export default function Header() {

//   const toggleBtn = document.querySelector(".toggle-btn");
//   const toggleBtnicon = document.querySelector(".icon");
//   const dropdownMenu = document.getElementById("teste");
//   const [navbar, setNavbar] = useState(false);

//   function openNav(){
//      dropdownMenu.classList.toggle('open')
//   }

//   function changeBackground(){
//     if (window.scrollY >= 80) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", changeBackground);

//   return (
//     <div className={navbar ? "nav" : "nav active"}>
//       <header>
//         <div className="navbar">
//           <ul className="links">
//             <li>
//               <a href="/">HOME</a>
//             </li>
//             <li>
//               <a href="/Projects">PROJECTS</a>
//             </li>
//             <li>
//               <a href="/Contact">CONTACT</a>
//             </li>
//           </ul>
//           <div className="togle-btn" onClick={openNav}  >
//             <FontAwesomeIcon className="icon" icon={faBars} />
//           </div>
//           <div id="teste" className="dropdown-menu">
//             <li>
//               <a href="/">HOME</a>
//             </li>
//             <li>
//               <a href="/Projects">PROJECTS</a>
//             </li>
//             <li>
//               <a href="/Contact">CONTACT</a>
//             </li>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
