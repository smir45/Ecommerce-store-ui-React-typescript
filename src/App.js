import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './jsx/Home';
import Contact from './jsx/contactus';
import Service from './jsx/service';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
