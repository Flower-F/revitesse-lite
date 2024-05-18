import { RouterProvider } from 'react-router-dom';
import Footer from '~/components/Footer';
import { router } from './router';

const App = () => {
  return (
    <main className='px-4 py-9 text-center font-sans text-gray-700 dark:text-gray-200'>
      {/* <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense> */}
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
};

export default App;
