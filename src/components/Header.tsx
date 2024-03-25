import PersonIcon from "../assets/images/person.png";
import InstagramIcon from "../assets/images/instagramicon.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/home":
        setActiveTab("Home");
        break;
      case "/community":
        setActiveTab("Community");
        break;
      case "/stories":
        setActiveTab("Stories");
        break;
      case "/shop":
        setActiveTab("Shop");
        break;
      case "/feedback":
        setActiveTab("Feedback");
        break;
      default:
        setActiveTab("");
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-top">
          <img className="personicon" src={PersonIcon} alt="person icon" />
          <div className="activetabname">{activeTab}</div>
          <img
            className="instagramicon"
            src={InstagramIcon}
            alt="instagram icon"
          />
        </div>
        <div className="header-container-bottom">
          <div className="header-container-bottom-btns">
            <a href="#IELTS">IELTS </a>
            <a href="#PTE">PTE </a>
            <a href="#TOFEL">TOFEL </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
