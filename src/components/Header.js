import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import matchaIcon from '../images/matcha-icon2.JPG';


function Header() {
    return (
        <div className='header-panel'>
            {/* logo */}
            <img className="logo" src={logo} alt='logo' />
            {/* title */}
            <h1 className='title'>Little Rogue</h1>
            {/* nav */}
            <div className='navbar'>
                <Link to='/' className='nav-btn'>Home</Link>
                <Link to='/contact' className='nav-btn'>Contact</Link>
                <Link to='/faq' className='nav-btn'>FAQ</Link>
                {/* menu */}
                {/* shop */}
            </div>
            {/* bottom img */}
            <img className="matcha-icon" src={matchaIcon} alt='matcha' />

        </div>

    )

}

export default Header;