import Logo from '../../assets/LOGO_pink.svg'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
     return (
          <header>
               <img src={Logo} alt="Kasa" />
               <nav>
                    <ul>
                         <li>
                              <Link to="/">Accueil</Link>
                         </li>
                         <li>
                              <Link to="/apropos">A Propos</Link>
                         </li>
                    </ul>
               </nav>
          </header>
     )
}

export default Header
