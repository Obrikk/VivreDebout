import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Actus from './Pages/Actus'
import Soutien from './Pages/Soutien'
import NousConnaitre from './Pages/NousConnaitre'
import Admin from './Pages/Admin'
import Conseil from './Pages/Conseil'
import Sorties from './Pages/Sorties'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Home/>
  },
  {
    path : '/actualites',
    element: <Actus/>
    
  },
  {
    path : '/agendas',
    element: <Actus/>
    
  },
  {
    path : '/sorties',
    element: <Sorties/>
    
  },
  {
    path : '/nous-connaître',
    element: <NousConnaitre/>
    
  },
  {
    path : '/nous-connaître/conseil',
    element: <Conseil/>
    
  },
  {
    path : '/sorties',
    element: <Sorties/>
    
  },
  {
    path : '/admin',
    element: <Admin/>
    
  },
])

function App() {

  return <RouterProvider router={router}> <RouterProvider/>
}

export default App
