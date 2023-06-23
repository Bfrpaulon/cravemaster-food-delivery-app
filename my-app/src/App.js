import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Restaurants from './pages/Restaurants';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;