import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './jsx/Home';
import Contact from './jsx/contactus';
import Service from './jsx/service';
import Careers from './jsx/careers';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
        <Route path="/career" exact component={Careers} />
        <Route path="/contact" exact component={Contact} />

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
