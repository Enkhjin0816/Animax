import logo from '../assets/logo.png';
import checkIcon from '../assets/greenCheckIcon.svg';
import '../styles/login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="login-section">
                <div className="login-container">
                    <div className='logoIcon'>
                        <img src={checkIcon} height={110} />
                        <img className='iconLogo' src={logo} />
                        {/* <div className="inputs">
                            <input type="text" />
                            <input type="password" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='logo'>
                <img src={logo} />
            </div>
        </div>
    )
}

export { Login };