import { faCheck , faSignInAlt , faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UpperFormsSection() {
    return (
        <section id="register-sign">
        <span id="dot-register" className="dot-register"><FontAwesomeIcon icon={faCheck} size="xl"></FontAwesomeIcon></span>
        <span id="dot-login" className="dot-login"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>
      
        <div className="register" id="register">
          <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
          <p>Register</p>
          <span>Browse and find what you need.</span>
          </div>
        <div className="sign-in" id="sign-in">
          <FontAwesomeIcon icon={faSignInAlt} size="lg"></FontAwesomeIcon>
          <p>Sign In</p>
          <span>Already have an account , then welcome back.</span>
        </div>
        </section>
      )
    }
    
    export default UpperFormsSection