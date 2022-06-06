
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './conponents/Navbar';
import PrivateRoute from './conponents/PrivateRoute';
import Cart from './Page/Cart';
import Home from './Page/Home';
import Login from './Page/Login';
import Men from './Page/Men';
import Women from './Page/Women';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/men' element={ <PrivateRoute><Men/></PrivateRoute>}></Route>
        <Route path='/women' element={<PrivateRoute><Women/></PrivateRoute>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/cart" element={
        // <PrivateRoute>
          <Cart/>
          // </PrivateRoute>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
