import loginImage from '../../assets/Icons/login.svg'
import phone from '../../assets/Icons/phone.svg'
import './style.css';
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
          <img src={loginImage} alt='login'/>
      </div>
      <div className="login-container-content">
        
        <div className='login-content'>
          <div className='login-title'>
            Welcome back!
          <div className='content-title'> 
            Remember me? I'm your barberio.
          </div>
          </div>
        </div>
        <div className='form'>
          <img src={phone} alt='phone'/>
          <div className='input feild'>Enter Your Phone Number</div>
          
        </div>
        <button className='login-button'>Login</button>
      </div>
    </div>
  )
}

export default Login