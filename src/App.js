import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={Login} />
          <Route path='/home' Component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
