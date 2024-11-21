import './header.css'
import logoF1 from '../../assets/images/logoFI1.png'
import UASLPLogo1 from '../../assets/images/UASLPLogo1.png'


function Header() {

  return (
    <>
        <header className='header'>
            <img src={logoF1} className="logo" alt="logo" />
            <img src={UASLPLogo1} className="logo" alt="logo" />
        </header>
    </>

  )
}

export default Header
