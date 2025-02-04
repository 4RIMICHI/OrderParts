import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PartsSearch from './components/PartsSearch';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Breadcrumbs />
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