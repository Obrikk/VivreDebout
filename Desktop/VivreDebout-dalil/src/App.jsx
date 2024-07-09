import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from "./Header"
import Home from './Home'
import Actus from './Pages/Actus'
import Soutien from './Pages/Soutien'
import NousConnaitre from './Pages/NousConnaitre'
import Admin from './Pages/Admin'
import Conseil from './Pages/Conseil'
import Sorties from './Pages/Sorties'
import PrisEnContes from './Pages/PrisEnContes'
import Solidarite from './Pages/Solidarite'
import Aides from '../src/Pages/Conseils/Aides'
import Stagiaires from '../src/Pages/Conseils/Stagiaires'
import Instruction from '../src/Pages/Conseils/Instruction'
import Emulation from '../src/Pages/Conseils/Emulation'
import Pch from '../src/Pages/Conseils/Pch'



const router = createBrowserRouter([
  {
    path : '/',
    element: <Home/>
  },

  {
    path : 'Soutien',
    element: <Soutien/>
  },
  {
    path : '/actus',
    element: <Actus/>
    
  },
  {
    path : '/solidarite',
    element: <Solidarite/>
    
  },
    {
    path : '/Pch',
    element: <Pch/>
    
  },
  
  {
    path : '/solidarite/conseil',
    element: <Conseil/>
    
  },
    {
    path : '/Instruction',
    element: <Instruction/>
    
  },
  {
    path :'/Emulation',
    element: <Emulation/>
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
    path : '/sorties',
    element: <Sorties/>
    
  },
  {
    path : '/Stagiaires',
    element: <Stagiaires/>
    
  },
  {
    path : '/Aides',
    element: <Aides/>
    
  },
  {
    path : '/admin',
    element: <Admin/>
    
  },
  {
    path : '/pris-en-contes',
    element: <PrisEnContes/>
    
  },
  
])

function App() {

  return (
      <RouterProvider router={router}>

      </RouterProvider>

  )
}

export default App
