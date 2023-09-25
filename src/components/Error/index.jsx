import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
     return (
          <div className="Error_Container">
               <h1>404</h1>
               <h2>Oups! La page que vous demandez n'existe pas.</h2>
               <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
     )
}

export default Error
