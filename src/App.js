// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router exact path='/'>
            <Login />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
