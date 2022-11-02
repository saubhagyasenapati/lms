
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Bookissue from './components/Bookissue';
import Librarypass from './components/Librarypass';
import Loginlibrary from './components/Loginlibrary';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from './components/Hero';

function App() {
  return (
      <Router>
      <Header/> 
        <Routes>
             <Route exact path="/" element={<Hero/>}/>
             <Route exact path="/home" element={<Hero/>}/>
              <Route exact path="login" element={<Login/>}>
                  <Route  path="loginlibrary" element={<Loginlibrary/>}/>
                  <Route  path="registerlibrary" element={<Register/>}/>
              </Route>
              <Route exact path="/bookissue" element={<Bookissue/>}/>
              <Route exact path="/librarypass" element={<Librarypass/>}/>
              
        </Routes>
      </Router>
  
  );
}

export default App;


