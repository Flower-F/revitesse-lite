import { RouterProvider } from 'react-router-dom';
import Footer from '~/components/Footer';
import { router } from './router';

export const App = () => {
  return (
    <main className='px-4 py-9 text-center font-sans text-gray-700 dark:text-gray-200'>
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
};
