import { useState, useEffect } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './pages/Header'
import About from './pages/About'
import Project from './pages/Project'
import Skills from './components/Skills'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import PageNotFound from './pages/PageNotFound'

function App() {
  const [loading, setLoading] = useState(false)
  const override = {}
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="loader">
        <RingLoader
          color="#fff"
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  } else {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <About />
                <Skills />
                <Project />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    )
  }
}

export default App
