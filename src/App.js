// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Adduser from './components/Adduser';
import Navbar from './components/Navbar';
import Alluser from './components/Alluser';
import EditUser from './components/EditUser';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route  path='/' element={<Dashboard/>}/>
       
        <Route path='/all' element={<Alluser/>}/>
        
       
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
