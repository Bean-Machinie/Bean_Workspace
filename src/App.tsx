import { Routes, Route } from 'react-router-dom'
import AppLayout from '@/components/Layout/AppLayout'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import HomePage from '@/features/home/HomePage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* Protected section — add authenticated routes here */}
        <Route element={<ProtectedRoute />}>
          {/* Example: <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Route>
      </Route>
    </Routes>
  )
}
