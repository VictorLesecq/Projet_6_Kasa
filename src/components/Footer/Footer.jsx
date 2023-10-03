import Logo from '../../assets/LOGO_white.svg'
import './Footer.scss'

function Footer() {
     return (
          <footer>
               <div className="Footer_Content">
                    <img src={Logo} alt="Kasa" height="40" />
                    <p>© 2020 Kasa. All rights reserved</p>
               </div>
          </footer>
     )
}

export default Footer
