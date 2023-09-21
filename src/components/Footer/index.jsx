import Logo from '../../assets/LOGO_white.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FooterBackground = styled.footer`
     background-color: ${colors.dark};
     color: ${colors.light};
`
const FooterContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding-block: 50px;
     max-width: 50vw;
     margin: auto;

     & p {
          padding-top: 30px;
          text-align: center;
     }
`
function Footer() {
     return (
          <FooterBackground>
               <FooterContainer>
                    <img src={Logo} alt="Kasa" height="40" />
                    <p>© 2020 Kasa. All rights reserved</p>
               </FooterContainer>
          </FooterBackground>
     )
}

export default Footer
