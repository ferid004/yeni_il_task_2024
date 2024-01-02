import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrivateRouter from './router/PrivateRouter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/login" />
          <Route path="/register" />
          <Route element={<PrivateRouter/>} >
            <Route path="/admin" />
            <Route path="/profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
