import 'bootstrap/dist/css/bootstrap.css'
import { React } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './components/Navbar'; 
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import Balance from './components/balance';
import Home from './Home';
import { UserContext } from './components/context';
import './index.css';

function App() {
    return (
      <HashRouter>
       <div>
         <NavBar/>
          
         <UserContext.Provider value={{users:[{name:'Gia Baker',email:'geebaker143@gmail.com',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/CreateAccount/" element={<CreateAccount/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/balance/" element={<Balance/>} />
            <Route path="/alldata/" element={<AllData/>} />
          </Routes>
          </div>
         </UserContext.Provider> 

         
        </div>      
      </HashRouter>
    );
  }
 
 export default App;
  
  