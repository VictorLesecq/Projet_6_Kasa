import Logo from '../../assets/LOGO_pink.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import { breakpoints } from '../../utils/style/atoms'

const HeaderContainer = styled.header`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-top: 45px;

     @media (max-width: ${breakpoints.small}) {
          & img {
               height: 46px;
          }
     }
`
const HeaderNav = styled.nav`
     & ul {
          display: flex;
          align-items: center;
          height: 100%;
          list-style-type: none;
     }
     & li {
          margin-left: 50px;
     }
     & a {
          color: ${colors.primary};
          text-decoration: none;
     }
     & a:hover {
          text-decoration: underline;
     }
`

function Header() {
     return (
          <HeaderContainer>
               <img src={Logo} alt="Kasa" />
               <HeaderNav>
                    <ul>
                         <li>
                              <Link to="/">Accueil</Link>
                         </li>
                         <li>
                              <Link to="/apropos">A Propos</Link>
                         </li>
                    </ul>
               </HeaderNav>
          </HeaderContainer>
     )
}

export default Header
