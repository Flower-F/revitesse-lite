import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Footer from '~/components/Footer';
import routes from '~react-pages';

const App = () => {
  return (
    <main className='text-dark:gray-200 px-4 py-9 text-center font-sans text-gray-700'>
      <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
      <Footer />
    </main>
  );
};

export default App;
