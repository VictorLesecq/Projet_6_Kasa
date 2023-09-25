import { useParams, Navigate } from 'react-router-dom'
import { DataKasa } from '../../assets/data'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import StarActive from '../../assets/star-active 1.png'
import StarInactive from '../../assets/star-inactive 1.png'

import './Accomodation.scss'

function Accomodation() {
     // const navigate = useNavigate()
     const { idAccomodation } = useParams()
     const dataNum = DataKasa.findIndex(
          (element) => element.id === idAccomodation,
     )
     if (dataNum === -1) {
          return <Navigate to="/error" replace={true} />
     }
     const {
          title,
          pictures,
          description,
          host,
          rating,
          location,
          equipments,
          tags,
     } = DataKasa[dataNum]

     const [firstName, lastName] = host.name.split(' ')
     const range = [1, 2, 3, 4, 5]
     return (
          <main>
               <Carrousel pictures={pictures} />

               <div className="Accomodation_Resume">
                    <div>
                         <h1>{title}</h1>
                         <h2>{location}</h2>
                         <div className="Tags_Container">
                              {tags.map((tag, index) => (
                                   <span key={`${tag}-${index}`}>{tag}</span>
                              ))}
                         </div>
                    </div>
                    <div className="Owner_Info">
                         <div className="Owner_IdContainer">
                              <div>
                                   <div>{firstName}</div>
                                   <div>{lastName}</div>
                              </div>
                              <img
                                   className="Owner_Picture"
                                   src={host.picture}
                                   alt="Propriétaire"
                              />
                         </div>
                         <div>
                              {range.map((rangeElem) =>
                                   rating >= rangeElem ? (
                                        <img
                                             key={rangeElem.toString()}
                                             src={StarActive}
                                             alt="star"
                                        />
                                   ) : (
                                        <img
                                             key={rangeElem.toString()}
                                             src={StarInactive}
                                             alt="star"
                                        />
                                   ),
                              )}
                         </div>
                    </div>
               </div>

               <div className="Accomodation_Details">
                    <Collapse title="Description">{description}</Collapse>
                    <Collapse title="Equipements">
                         <ul>
                              {equipments.map((item, index) => (
                                   <li key={`${item}-${index}`}>{item}</li>
                              ))}
                         </ul>
                    </Collapse>
               </div>
          </main>
     )
}

export default Accomodation
