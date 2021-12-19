const submitUser = async (event) => {
	event.preventDefault();
	const user = {
    firstName : event.target[0].value,
    lastName : event.target[1].value,
    username : event.target[2].value,
    password : event.target[3].value,
    roles : ["user"]
}
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user)
};
const res = await fetch("http://localhost:8080/api/auth/signup",requestOptions);
const result = await res.json();
if(result){
  alert(result.message +" Please Click on Signup to login");
}
};

function UserRegistration() {
    return (
      <form id="register-form" className="form-inline" onSubmit={submitUser}>
      <div className="full-name">
      <input type="text" name="firstname" placeholder=" Name*"/>
      <input type="text" placeholder=" Last Name*"/>
      </div>
      <input type="text" placeholder=" Email*"/>
      <input type="password" placeholder=" Password*"/>
      <input type="password" placeholder=" Repeat Password*"/>
      <input type="submit" value="Submit"/>
    </form>
    )
  }
  
  export default UserRegistration