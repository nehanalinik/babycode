import { NavLink } from "react-router-dom";
import Logo from '../assets/images/babycodelogo.png';
// import HomeIcon from '../assets/images/home.png';
// import CommunityIcon from '../assets/images/Users.png';
// import StoriesIcon from '../assets/images/StoriesIcon.png';
// import ShopIcon from '../assets/images/Storefront.png';
// import FeedbackIcon from '../assets/images/message-square.png';
import ArrowRightIcon from '../assets/images/ArrowCircleRight.png';
import ArrowRightIconWhite from '../assets/images/ArrowCircleRight (1).png';
import { MdLogout } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { PiUsers, PiStorefront } from "react-icons/pi";
import { LuTextSelect } from "react-icons/lu";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-container">
        <div className="logo">
          <img src={Logo} alt="babycode logo" />
          BabyCode
        </div>
        <div className="sidebar-container-elements">
          <nav>
            <NavLink to="/home"> <BiHomeAlt size={18}/><p>Home</p></NavLink>
            <NavLink to="/community"><PiUsers size={18}/> <p>Community</p></NavLink>
            <NavLink to="/stories"><LuTextSelect size={18}/><p>Stories</p></NavLink>
            <NavLink to="/shop"><PiStorefront size={18}/><p>Shop</p></NavLink>
            <NavLink to="/feedback"><FiMessageSquare size={18}/><p>Feedback</p></NavLink>
          </nav>
          <div className="sidebar-container-elements-bottom">
            <div className="calltoaction-container">
              <h2>Explore premium features with ease!</h2>
              <ul>
                <li><img src={ArrowRightIcon}/>Unlimited Speaking Test Access</li>
                <li><img src={ArrowRightIcon}/>Unlimited Writing Test Access</li>
                <li><img src={ArrowRightIcon}/>Analvze Your Answer</li>
                <li><img src={ArrowRightIcon}/>Check Band Score</li>
              </ul>
              <div className="cta">
                <p>Only @ &#8377; 299</p>
                <button>Buy Now <img src={ArrowRightIconWhite}/></button>
              </div>
            </div>
            <div className="logout-container">
            <MdLogout /> Logout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
