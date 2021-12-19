import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";



function Navbar(props) {

  if (typeof window !== 'undefined') {
    var username = localStorage.getItem("connectedUsername");
  }
  const router = useRouter();
  const onClick = (e) =>{
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      localStorage.removeItem("connectedUsername")
      router.push("/")
      }
  }

    return (
      <div>
      <div className="upperNav">
      <div><a href="#login">Signin</a></div>
      <div><a href="#register">Register</a></div> 
    </div>
      <div className="nav">
      <ul>
      <div className="logo">
      <li id="logo1">
        <div className="square1"></div>
        <div className="square2"></div>
      </li>
        <li id="logo2">
        <div className="square1"></div>
        <div className="square2"></div>
      </li>
      </div>
      <div className="nav-items">
    <li><a  href="homePage">Home</a></li>
    <li><a href="#news">About us</a></li>
    <li><a href="#contact">Contact us</a></li>
    <li hidden={props.connected} id="user-profile"><div>{username}</div></li>
    <li> <button onClick={onClick} hidden={props.connected}>logout</button> </li>
      </div>
  </ul>
  </div>
  </div>
    )
  }
  
  export default Navbar