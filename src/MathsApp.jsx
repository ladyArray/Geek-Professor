import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './router/AppRouter'

function MathsApp() {

  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
export default MathsApp
