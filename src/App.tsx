
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Navigate to='/'/>}/>
          <Route path='/login' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
