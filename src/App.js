import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SkillPage from './components/SkillPage';
import {HashRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/skills" element = {<SkillPage/>}/>         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
