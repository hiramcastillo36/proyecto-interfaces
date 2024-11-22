import './header.css';
import logoF1 from '../../assets/images/logoFI1.png';
import UASLPLogo1 from '../../assets/images/UASLPLogo1.png';
import ModeButton from '../modeButton/modeButton'; // Importa el componente correctamente

function Header() {
  return (
    <>
      <header className='header'>
        <img src={UASLPLogo1} className="logo" alt="logo" />
        <img src={logoF1} className="logo" alt="logo" />
        <div className="modeButton-container">
        <ModeButton /> 
        </div>
      </header>
    </>
  );
}

export default Header;
