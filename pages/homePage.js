import Navbar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";


function HomePage() {
    const router = useRouter();
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        router.push("/")
      }
    });
    return (
        <div>
        <Navbar/>
        <div id="content">
        <div className="homePage">
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
          </ul>
          <p>Home Page</p>
      </div>
     
      </div>
  <Footer/>
  </div>

    )
  }
  
  export default HomePage