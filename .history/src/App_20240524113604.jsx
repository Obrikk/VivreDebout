import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Actus from './Pages/Actus';
import Soutien from './Pages/Soutien';
import NousConnaitre from './Pages/NousConnaitre';
import Admin from './Pages/Admin';
import Conseil from './Pages/Conseil';
import Sorties from './Pages/Sorties';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  // Use Layout as the wrapper
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/actualites',
        element: <Actus />
      },
      {
        path: '/agendas',
        element: <Actus />
      },
      {
        path: '/sorties',
        element: <Sorties />
      },
      {
        path: '/nous-connaître',
        element: <NousConnaitre />
      },
      {
        path: '/nous-connaître/conseil',
        element: <Conseil />
      },
      {
        path: '/admin',
        element: <Admin />
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
