import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation'
import GlobalStyle from './utils/style/GlobalStyle'
import APropos from './pages/APropos'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
     <React.StrictMode>
          <Router>
               <GlobalStyle />
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                         path="/accomodation/:idAccomodation"
                         element={<Accomodation />}
                    />
                    <Route path="/apropos" element={<APropos />} />
                    <Route path="*" element={<Error />} />
               </Routes>
               <Footer />
          </Router>
     </React.StrictMode>,
)
