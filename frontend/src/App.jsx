import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/NoPage';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Admin from './pages/Admin/Admin';
import Basket from './pages/Basket/Basket';
import Detail from './pages/Detail/Detail';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Detail/:id" element={<Detail/>}/>
          <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
