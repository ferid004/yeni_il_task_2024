import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrivateRouter from './router/PrivateRouter'
import MainL from './layout/MainL'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainL />} >
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRouter />} >
              <Route path="/admin" element={<Admin />}  />
              <Route path="/profile" element={<Profile />}  />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
