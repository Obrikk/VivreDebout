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
import PrisEnContes from './Pages/prisEnContes'
import Solidarite from './Pages/solidarite'
import theme from "/src/Pages/theme.jsx";
import { ChakraProvider } from "@chakra-ui/react";
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
    path : '/solidarite',
    element: <Solidarite/>
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
    path : '/PrisEnContes',
    element: <PrisEnContes/>
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

  return <RouterProvider router={router}/>
}

export default App
