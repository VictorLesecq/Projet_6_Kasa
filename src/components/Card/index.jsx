import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardContainer = styled.div`
     border-radius: 10px;
     position: relative;
     height: 100%;

     img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
     }

     h2 {
          position: absolute;
          font-size: 1.125rem;
          color: ${colors.light};
          font-weight: normal;
          bottom: 20px;
          margin-inline: 20px;
          z-index: 2;
     }

     &:after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(transparent, ${colors.dark});
          opacity: 0.5;
          border-radius: 10px;
     }
`

function Card(props) {
     const { cover, title } = props.location
     return (
          <CardContainer>
               <img src={cover} alt="logement" />
               <h2>{title}</h2>
          </CardContainer>
     )
}

export default Card
