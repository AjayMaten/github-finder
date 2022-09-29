import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import { GithubProvider } from './Context/Github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router className='bg-purple-500'>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
