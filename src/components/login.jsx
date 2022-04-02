import logo from "../assets/logo.png";
import checkIcon from "../assets/greenCheckIcon.svg";
import "../styles/login.css";
import Stack from "../core/stack";
import Button from "../core/button";
import phoneIcon from '../assets/icon1.svg';
import passIcon from '../assets/icon2.svg';

const Login = () => {
  return (
    <div className="container">
      <div className="login-section">
        <div className="login-container">
          <div className="logoIcon">
            <img src={checkIcon} height={110} />
            <img className="iconLogo" src={logo} />
          </div>
          <div className="inputs">
            <Stack row>
                <img src={phoneIcon} width={'15px'} />
              <input placeholder="Утасны дугаар" type="text" />
            </Stack>
            <Stack row>
                <img src={passIcon} width={'15px'} />
                <input placeholder="Нууц үг эсвэл пин код" type="password" />
            </Stack>
          </div>
          <Button>Нэвтрэх</Button>
          <Stack row width sBetween>
              <Button secondary>Нууц үгээ мартсан?</Button>
              <Button secondary>Сайтад бүртгүүлэх</Button>
          </Stack>
          <div className="rule">
              <p>Цаашид зөвхөн утасны дугаараар нэвтрэх болно. Иймд имэйл эсвэл фэйсбүүкээрээ ордог байсан бөгөөд тус хаяг дээр чинь хоног байгаа бол дараах зөвлөмжийг дагана уу.</p>
              <div className="rules">
                  <p>1. Шинээр сайтад бүртгүүлэх</p>
                  <p>2. Хуучин ID гаа хуулганаасаа харах</p>
                  <p>3. Сайтын фэйсбүүк хуудасруу хуучин болон шинэ ID гаа бичин явуулж шилжүүлэх хүсэлт өгөх. Ингэснээр таны хуучин ID дээрх үлдсэн хоног шилжих юм.</p>
              </div>
          </div>
        </div>
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
    </div>
  );
};

export { Login };
