import Navbar from "./navbar";
import UpperFormsSection from "./upperFormsSection";
import UserAuthentication from "./userAuthentication";
import Footer from "./footer";
import UserRegistration from "./userRegistration";
import Script from 'next/script'
import HomePage from "./homePage";
import { useEffect } from "react/cjs/react.development";
import { useRouter } from "next/router";


export default function Home() {
  var connected = true;
  const router = useRouter();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      router.push("/homePage")
    }
  });

  if (typeof window !== 'undefined') {
    var username = localStorage.getItem("connectedUsername");
    if(localStorage.getItem("token")){ connected = false;}else{connected = true;}
  }
  return (
<div>
  <Navbar connected={connected} />
  <UpperFormsSection/>
  <UserAuthentication/>
  <UserRegistration/>
  <Footer/>
  <Script>
  {
    `
    var registerDot = document.getElementById("dot-register");
    var loginDot = document.getElementById("dot-login");
  
    var register = document.getElementById("register");
    var login = document.getElementById("sign-in");

    var registerForm = document.getElementById("register-form");
    var loginForm = document.getElementById("login-form");

    registerDot.style.display = "none"
    loginDot.style.display = "flex";
    registerForm.style.display ="none";


    register.addEventListener('click', event => {
     loginForm.style.display ="none";
     registerForm.style.display = "flex";
     registerDot.style.display ="flex"
     loginDot.style.display = "none";
    });

    login.addEventListener('click', event => {
      registerForm.style.display ="none";
      loginForm.style.display = "flex";
      registerDot.style.display ="none"
      loginDot.style.display = "flex";
      return;
     });
    
    `
  }  
  </Script>
</div>
  )
}
