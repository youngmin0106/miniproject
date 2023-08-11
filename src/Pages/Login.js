import MyFacebookLoginButton from "../component/LoginHome";
import login from "../img/logo.png";
const Login = () =>{
  return(
    <>
    <img className="login" src={login}/>
   <MyFacebookLoginButton/>
   </>
  )
}

export default Login;