import barberimage from '../../../assets/Icons/barber.svg'
import './style.css'
const HomeContent = () => {
  return (
    <div className='home-container'>
        <div className='home-background'>
            <img src={barberimage} alt='barber'/>
        </div>
        <div className='home-content'>
            <div className='home-content-title'>
            Barberio
            </div>
            <div className='home-content-discription'>
                <div className='content-title'>Hello and welcome to Barberio!</div>
                <div className='content-discription'>
                Our barbers will pamper you with a haircut and shave of your choice. 
                Have a seat and we'll be right with you!
                </div>
            </div>
            <div className='button-component'>
                <button className='login-button'>Login</button>
                <button className='register-button'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default HomeContent