import { DataKasa } from '../../assets/data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import PictureHeroSection from '../../assets/Image_source-1.jpg'
import Card from '../../components/Card'
import { breakpoints } from '../../utils/style/atoms'
import HeroSection from '../../components/HeroSection'

const Gallery = styled.section`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     gap: 60px;
     padding: 50px;
     margin-block: 50px;
     background-color: ${colors.grey};
     border-radius: 25px;

     @media (max-width: ${breakpoints.medium}) {
          grid-template-columns: 1fr 1fr;
     }

     @media (max-width: ${breakpoints.small}) {
          display: flex;
          flex-direction: column;
          padding: 0;
          background-color: transparent;
          gap: 20px;
          margin-block: 25px;
     }
`
const CardLink = styled(Link)`
     text-decoration: none;
     aspect-ratio: 1;

     @media (max-width: ${breakpoints.small}) {
          aspect-ratio: 4 / 3;
     }
`

function Home() {
     return (
          <main>
               <HeroSection url={PictureHeroSection}>
                    <h1>
                         Chez vous, <span>partout et ailleurs</span>
                    </h1>
               </HeroSection>

               <Gallery>
                    {DataKasa.map((location) => (
                         <CardLink
                              key={`${location.id}`}
                              to={`/accomodation/${location.id}`}
                         >
                              <Card location={location} />
                         </CardLink>
                    ))}
               </Gallery>
          </main>
     )
}

export default Home
