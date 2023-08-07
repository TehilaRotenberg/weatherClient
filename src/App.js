import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './comps/login';
import Home from './comps/home';
import { ContexProvider } from './contex';
import Header from './comps/header';

function App() {
  return (
  
    <div className="App"> 
   
    
      <ContexProvider> 
       
      <BrowserRouter> 
     
      <Header></Header> 
      <div className='d-flex align-items-center'>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>   
      </div>
      </BrowserRouter>
      </ContexProvider>
   
    </div>
  );
}

export default App;
