import React from 'react'
import ReactDOM from 'react-dom/client'
import {
     BrowserRouter as Router,
     Routes,
     Route,
     useLocation,
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation'
import GlobalStyle from './utils/style/GlobalStyle'
import APropos from './pages/APropos'
import Error from './components/Error'

function ScrollToTop() {
     const { pathname } = useLocation()

     // Retourner toujours à la position de défilement supérieure lors de la navigation
     React.useEffect(() => {
          window.scrollTo(0, 0)
     }, [pathname])

     return null
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
     <React.StrictMode>
          <Router>
               <GlobalStyle />
               <ScrollToTop />
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                         path="/accomodation/:idAccomodation"
                         element={<Accomodation />}
                         errorElement={<Error />}
                    />
                    <Route path="/apropos" element={<APropos />} />
                    <Route path="*" element={<Error />} />
               </Routes>
               <Footer />
          </Router>
     </React.StrictMode>,
)
