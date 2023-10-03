import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
     return (
          <div className="Error_Container">
               <div className="box"></div>
               <div className="Error_Content">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <p>
                         <Link to="/">Retourner sur la page d’accueil</Link>
                    </p>
               </div>
               <div className="box"></div>
          </div>
     )
}

export default Error
