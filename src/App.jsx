// import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Landing from './page/Landing/Landing'
import Foroosh from './page/Foroosh/Foroosh'
import Safety from './page/Safety/Safety'
import Khadamat from './page/Khadamat/Khadamat'
import Nazarat from './page/Nazarat/Nazarat'
import Matlab from './page/Matlab/Matlab'
import Footer from './page/Footer/Footer'



function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar/>
        <Landing/>
        <Foroosh/>
        <Safety/>
        <Khadamat/>
        <Nazarat/>
        <Matlab/>
        <Footer/>
      </div>

  )
}

export default App
