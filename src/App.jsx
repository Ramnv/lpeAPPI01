import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Dono from './componentes/telas/dono/Dono'
import Pet from './componentes/telas/pet/Pet'

function App() {
  return (
      <Router>
        <Menu/>
        <Routes>
          <Route exact="true" path="/" element={<Home/>}/>
          <Route exact="true" path="/donos" element={<Dono/>}/>
          <Route exact="true" path="/pets" element={<Pet/>}/>
        </Routes>
      </Router>
  );
}

export default App;
