import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.div`
     display: grid;
     grid-template-rows: 1fr;
     height: auto;
     text-align: center;
     color: ${colors.primary};

     & h1 {
          padding-top: 40px;
          font-size: 150px;
          font-weight: 700;
     }

     & h2 {
          padding-top: 30px;
     }

     & a {
          padding-block: 50px;
          color: ${colors.primary};
          font-size: 0.75rem;
     }
`

function Error() {
     return (
          <ErrorContainer>
               <h1>404</h1>
               <h2>Oups! La page que vous demandez n'existe pas.</h2>
               <Link to="/">Retourner sur la page d’accueil</Link>
          </ErrorContainer>
     )
}

export default Error
