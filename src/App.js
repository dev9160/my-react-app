import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/header';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home/home';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <div className='main d-flex'>
          <div className='sidebarWrapper'>
            <Sidebar />
          </div>

          <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/dashboard" exact={true} element={<Home />} /> 
          </Routes>
          </div>
        </div>
        

      </BrowserRouter>
      
  );
}

export default App;
