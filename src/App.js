
import './App.css';
import { BrowserRouter as Router , Route , Link} from "react-router-dom"
import Bmw from './components/Bmw';
import Cadillac from './components/Cadillac';
import Ford from './components/Ford';
import Mustang from './components/Mustang';
import Rollsroyce from './components/Rollsroyce';
import Rover from './components/Rover';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">
          Galeria de imagenes
        </h1>
      </div>
      <Route path="/Bmw" component={Bmw} />
      <Route path="/Cadillac" component={Cadillac} />
      <Route path="/Ford" component={Ford} />
      <Route path="/Mustang" component={Mustang} />
      <Route path="/Rollsroyce" component={Rollsroyce} />
      <Route path="/Rover" component={Rover} />

      <Navegacion/>
    </Router>
  );
}

export default App;
