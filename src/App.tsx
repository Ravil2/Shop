import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { routes } from './routes/route'

export default function App() {
  const location = useLocation()

  const noLayoutRoutes = ['/registration', '/login', '/reset-password']

  const showLayout = !noLayoutRoutes.includes(location.pathname)

  return (
    <>
      {showLayout && <Header />}
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      {showLayout && <Footer />}
    </>
  )
}
