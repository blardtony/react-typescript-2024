import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './components/router/BrowserRouter';

const App = () => {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};

export default App;
