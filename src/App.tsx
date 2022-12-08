import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Footer from '~/components/Footer';
import routes from '~react-pages';

const App = () => {
  return (
    <main className="font-sans px-4 py-9 text-center text-gray-700 text-dark:gray-200">
      <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
      <Footer />
    </main>
  );
};

export default App;
