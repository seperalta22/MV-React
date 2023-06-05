import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Services from '../pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
]);

export default router;
