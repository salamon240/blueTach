import './App.css';
import PrivateRoute from './compnets/PrivateRoute/PrivateRoute';
import { useAute } from './contex/aute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const {currentUser}=useAute();
  return (
    <div className="App">

     |<Router>
      <Routes>
        <Route path='/login' element={currentUser?<Navigate to="/recipes"/>:<Login></Login>}></Route>
        <Route path='/recipes' 
        element={
       <PrivateRoute>
        <Home/>
       </PrivateRoute>

        }>

        </Route>
      </Routes>
     </Router>
     <Login/>

    </div>
  );
}

export default App;
