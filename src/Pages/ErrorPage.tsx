import { Link } from "react-router-dom"
import Logo from '../assets/images/babycodelogo.png';

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <Link to="/home" className="logo">
          <img src={Logo} alt="babycode logo" />
          BabyCode
        </Link>
      <div className='error-container'>
        <h2>404 Page Not Found</h2>
        <h5>Oh no! Seems like you tried accessing the page that doesn't exists or in under construction</h5>
        <p>Go back <Link to= "/home">Home</Link></p>
      </div>
    </div>
  )
}

export default ErrorPage