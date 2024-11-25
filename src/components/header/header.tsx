import './header.css';
import logoF1 from '../../assets/images/logoFI1.png';
import UASLPLogo1 from '../../assets/images/UASLPLogo1.png';
import SwitchButton from '../switchButton/switchButton';

function Header() {
  return (
    <>
      <header className='header'>
        <img src={UASLPLogo1} className="logo" alt="logo" />
        <img src={logoF1} className="logo" alt="logo" />
        <div className="modeButton-container">
        <SwitchButton /> 
        </div>
      </header>
    </>
  );
}

export default Header;
