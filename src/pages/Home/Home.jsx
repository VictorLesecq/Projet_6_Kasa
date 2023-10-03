import { DataKasa } from '../../assets/data'
import { Link } from 'react-router-dom'
import PictureHeroSection from '../../assets/Image_source-1.jpg'
import Card from '../../components/Card/Card'
import HeroSection from '../../components/HeroSection/HeroSection'
import './Home.scss'

function Home() {
     return (
          <main>
               <HeroSection url={PictureHeroSection}>
                    <h1>
                         Chez vous, <span>partout et ailleurs</span>
                    </h1>
               </HeroSection>

               <section className="Gallery">
                    {DataKasa.map((location) => (
                         <Link
                              key={`${location.id}`}
                              to={`/accomodation/${location.id}`}
                         >
                              <Card location={location} />
                         </Link>
                    ))}
               </section>
          </main>
     )
}

export default Home
