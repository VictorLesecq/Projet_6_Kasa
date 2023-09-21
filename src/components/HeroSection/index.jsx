import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { breakpoints } from '../../utils/style/atoms'

const HeroSectionContainer = styled.div`
     position: relative;
     width: 100%;
     margin: auto;
     padding: 77px;
     border-radius: 25px;
     background-image: url(${(props) => props.$url});
     background-position: center;
     object-fit: cover;
     margin-top: 50px;
     display: flex;
     flex-wrap: wrap;

     &:before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: 25px;
          background: #000000;
          opacity: 0.3;
     }

     & h1 {
          position: relative;
          z-index: 2;
          color: ${colors.light};
          text-align: center;
          width: 100%;
          font-size: 3em;
     }

     & div {
          height: 60px;
     }

     @media (max-width: ${breakpoints.small}) {
          padding: 30px;

          & span {
               display: block;
          }

          & h1 {
               font-size: 1.5em;
               text-align: start;
          }
     }
`

function HeroSection(props) {
     // const { url } = props
     return (
          <HeroSectionContainer $url={props.url}>
               {props.children ? props.children : <div></div>}
          </HeroSectionContainer>
     )
}

export default HeroSection
