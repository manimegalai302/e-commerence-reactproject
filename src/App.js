import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Components/Login';
import Products from './Components/Products';
import Collection from './Components/Collection';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import  AuthProvider from './Components/auth';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<RequireAuth><Home/></RequireAuth> } />
          <Route path="/login" element={<Login />} />

          <Route path="/products" element={<RequireAuth><Products /></RequireAuth>}>
          <Route path="/products/collection" element={<Collection/>} />
          <Route path ="/products/cart" element={<Cart/>} />
          </Route>

         <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
         
        </Routes>
      </Router>
      </AuthProvider>
  
    </div>
  );
}

export default App;

