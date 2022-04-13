import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path="/chat"/>
          <Route path="/" element={<TinderCards />}/>
        </Routes>
      </Router>

      {/* Tinder cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
