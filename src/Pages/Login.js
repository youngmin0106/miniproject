import MyFacebookLoginButton from "../component/LoginHome";
import login from "../img/logo.png";
import "./Login.css";
const Login = () =>{
  return(
    <div className="logpage">
    <img className="login" src={login}/>
   <MyFacebookLoginButton/>
   </div>
  )
}

export default Login;