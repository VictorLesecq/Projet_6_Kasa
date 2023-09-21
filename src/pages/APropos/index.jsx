import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import PictureHeroSection from '../../assets/Image_source-2.jpg'
import Collapse from '../../components/Collapse'

const Container = styled.div`
     width: 90%;
     display: flex;
     flex-direction: column;
     margin: auto;
     margin-block: 25px;
`

function APropos() {
     return (
          <main>
               <HeroSection url={PictureHeroSection}></HeroSection>

               <Container>
                    <Collapse title="Fiabilité">
                         <p>
                              Les annonces postées sur Kasa garantissent une
                              fiabilité totale. Les photos sont conformes aux
                              logements, et toutes les informations sont
                              régulièrement vérifiées par nos équipes.
                         </p>
                    </Collapse>
                    <Collapse title="Respect">
                         <p>
                              La bienveillance fait partie des valeurs
                              fondatrices de Kasa. Tout comportement
                              discriminatoire ou de perturbation du voisinage
                              entraînera une exclusion de notre plateforme.
                         </p>
                    </Collapse>
                    <Collapse title="Service">
                         <p>
                              La bienveillance fait partie des valeurs
                              fondatrices de Kasa. Tout comportement
                              discriminatoire ou de perturbation du voisinage
                              entraînera une exclusion de notre plateforme.
                         </p>
                    </Collapse>
                    <Collapse title="Sécurité">
                         <p>
                              La sécurité est la priorité de Kasa. Aussi bien
                              pour nos hôtes que pour les voyageurs, chaque
                              logement correspond aux critères de sécurité
                              établis par nos services. En laissant une note
                              aussi bien à l'hôte qu'au locataire, cela permet à
                              nos équipes de vérifier que les standards sont
                              bien respectés. Nous organisons également des
                              ateliers sur la sécurité domestique pour nos
                              hôtes.
                         </p>
                    </Collapse>
               </Container>
          </main>
     )
}

export default APropos
