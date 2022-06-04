import registerImage from '../../../assets/Icons/sign.svg'
import './style.css'
const RegisterForm = () => {
  return (
    <div className="form-container">
        <div className='form-content'>
            <img src={registerImage} alt='register'/>
        </div>
        <div className='form-title'> 
            join the movement!
            <span>You deserve to look good.</span>
        </div>
        <div className='form-content-container'>
            <div className="form-element">
                <form>
                    <div className='form-input'>
                    <label>
                        <input type='text' placeholder='Shop Name'/>
                    </label>
                    </div>
                    <div className='form-input'>
                    <label>
                        <input type='text' placeholder='Phone Number'/>
                    </label>
                    </div>
                    <div className='form-input'>
                    <label>
                        <input type='text' placeholder='Register Number'/>
                    </label>
                    </div>
                    <div className='form-input'>
                    <label>
                        <input type='text' placeholder='Owner Name'/>
                    </label>
                    </div>
                    <button className='register-button'>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm