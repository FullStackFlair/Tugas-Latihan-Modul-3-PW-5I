// App.js
import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
