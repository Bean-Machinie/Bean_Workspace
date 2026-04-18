import { Routes, Route } from 'react-router-dom'
import AppLayout from '@/components/Layout/AppLayout'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import HomePage from '@/features/home/HomePage'
import LoginPage from '@/features/auth/LoginPage'
import SignUpPage from '@/features/auth/SignUpPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* Protected section — add authenticated routes here */}
        <Route element={<ProtectedRoute />}>
          {/* Example: <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Route>
      </Route>
    </Routes>
  )
}
