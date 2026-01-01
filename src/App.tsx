import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import LoginPage from './app/login/page'
import SignupPage from './app/signup/page'
import ForgetPassword from './app/Lupa pasword/lupasPassword'
import DashboardPage from './app/dashboard/home'
import NutriPlannerPage from './modules/nutriplanner'
import InventoryPage from './modules/inventory'
import KitchenPage from './modules/kitchen'
import FinancePage from './modules/finance'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/modules/nutriplanner" element={<NutriPlannerPage />} />
          <Route path="/modules/inventory" element={<InventoryPage />} />
          <Route path="/modules/kitchen" element={<KitchenPage />} />
          <Route path="/modules/finance" element={<FinancePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
