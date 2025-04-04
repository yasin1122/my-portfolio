// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import PortfolioItem from './components/PortfolioItem'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Header />
      {/* You can either create a home page that includes all sections…
          OR have separate routes for each section. */}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Introduction />
              <Services />
              <About />
              <Portfolio />
            </>
          }
        />
        <Route
          path='/portfolio/:id'
          element={<PortfolioItem />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}
