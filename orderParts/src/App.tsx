import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PartsSearch from './components/PartsSearch';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/parts-search" element={<PartsSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;