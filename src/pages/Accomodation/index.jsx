import { useParams } from 'react-router-dom'
import { DataKasa } from '../../assets/data'
import styled from 'styled-components'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import StarActive from '../../assets/star-active 1.png'
import StarInactive from '../../assets/star-inactive 1.png'
import colors from '../../utils/style/colors'
import { breakpoints } from '../../utils/style/atoms'

const AccomodationResume = styled.div`
     display: flex;
     justify-content: space-between;
     color: ${colors.primary};
     margin-top: 30px;

     @media (max-width: ${breakpoints.small}) {
          flex-direction: column;
     }

     & h1 {
          font-size: 2.25rem;
          font-weight: 500;
     }
     & h2 {
          font-size: 1.125rem;
          margin-bottom: 20px;
          font-weight: 500;
     }
     & span {
          background: ${colors.primary};
          border-radius: 10px;
          padding-inline: 40px;
          padding-block: 2px;
          font-size: 0.875rem;
          color: ${colors.light};
     }
`
const TagsContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     gap: 10px;
`
const AccomodationDetails = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 75px;
     margin-bottom: 50px;

     @media (max-width: ${breakpoints.small}) {
          grid-template-columns: 1fr;
          gap: 0;
     }

     & ul {
          list-style-type: none;
     }
`
const OwnerInfo = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;

     @media (max-width: ${breakpoints.small}) {
          flex-direction: row;
          justify-content: space-between;
          margin-block: 10px;
     }
`
const OwnerPicture = styled.img`
     width: 64px;
     aspect-ratio: 1;
     border-radius: 50%;
`
const OwnerIdContainer = styled.div`
     display: flex;
     justify-content: right;
     align-items: center;
     gap: 10px;
     margin-bottom: 20px;

     @media (max-width: ${breakpoints.small}) {
          margin-bottom: 0px;
          order: 1;
     }
`

function Accomodation() {
     const { idAccomodation } = useParams()
     const dataNum = DataKasa.findIndex(
          (element) => element.id === idAccomodation,
     )
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

               <AccomodationResume>
                    <div>
                         <h1>{title}</h1>
                         <h2>{location}</h2>
                         <TagsContainer>
                              {tags.map((tag, index) => (
                                   <span key={`${tag}-${index}`}>{tag}</span>
                              ))}
                         </TagsContainer>
                    </div>
                    <OwnerInfo>
                         <OwnerIdContainer>
                              <div>
                                   <div>{firstName}</div>
                                   <div>{lastName}</div>
                              </div>
                              <OwnerPicture
                                   src={host.picture}
                                   alt="Propriétaire"
                              />
                         </OwnerIdContainer>
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
                    </OwnerInfo>
               </AccomodationResume>

               <AccomodationDetails>
                    <Collapse title="Description">{description}</Collapse>
                    <Collapse title="Equipements">
                         <ul>
                              {equipments.map((item, index) => (
                                   <li key={`${item}-${index}`}>{item}</li>
                              ))}
                         </ul>
                    </Collapse>
               </AccomodationDetails>
          </main>
     )
}

export default Accomodation
