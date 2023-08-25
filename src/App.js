import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;

