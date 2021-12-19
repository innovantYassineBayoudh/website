import { useRouter } from 'next/router'


function UserAuthentication() {
  const router = useRouter();

  
const submitUser = async (event) => {
	event.preventDefault();
	const user = {
    username : event.target[0].value,
    password : event.target[1].value,
}
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user)
};
const res = await fetch("http://localhost:8080/api/auth/signin",requestOptions);
const result = await res.json();
localStorage.setItem("connectedUsername",result.username)
localStorage.setItem("token",result.accessToken)
router.push("/homePage")
};

  return (
  <form id="login-form" className="form-inline" onSubmit={submitUser}>
    <input type="text" placeholder=" Email*"/>
    <input type="password" placeholder=" Password*"/>
    <input type="submit" value="Submit"/>
  </form>
    )
  }
  
  export default UserAuthentication