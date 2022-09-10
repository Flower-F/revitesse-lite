import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

import Footer from './components/Footer'

const App = () => {
  return (
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
      <Footer />
    </main>
  )
}

export default App
