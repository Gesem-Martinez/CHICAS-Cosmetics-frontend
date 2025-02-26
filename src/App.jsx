import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import RutaProtegida from './Layouts/RutaProtegida'

import Login from './paginas/Login'
import Index from './paginas/Index'
import Dashboard from './paginas/Dashboard'

import { AuthProvider } from './context/AuthProvider'


function App() {

  return (
    <BrowserRouter >
      <AuthProvider>
        <Routes>

          {/* Acceso Publico */}
          <Route path='/' element={<MainLayout />}>
            <Route index element={ <Index />}/>
          </Route>
          
          <Route path='/admin' element={<Login />}/>

          {/* Rutas Protegidas */}
          <Route path='/admin' element={<RutaProtegida />}>
            <Route path='dashboard' element={ <Dashboard />}/>
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
