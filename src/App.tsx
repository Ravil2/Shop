import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { publicRoutes, privateRoutes } from './routes/route'
import { useAuth } from './hooks/useAuth'
import { GuestRoute } from './routes/GuestRoute'

export default function App() {
  const location = useLocation()
  const isAuth = useAuth()

  const noLayoutRoutes = ['/registration', '/login']
  const showLayout = !noLayoutRoutes.includes(location.pathname)

  return (
    <>
      {showLayout && <Header />}
      <Routes>
        {publicRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <GuestRoute>
                <Component />
              </GuestRoute>
            }
          />
        ))}

        {privateRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={isAuth ? <Component /> : <Navigate to="/login" replace />}
          />
        ))}

        <Route
          path="/"
          element={<Navigate to={isAuth ? '/home' : '/login'} replace />}
        />
      </Routes>

      {showLayout && <Footer />}
    </>
  )
}
