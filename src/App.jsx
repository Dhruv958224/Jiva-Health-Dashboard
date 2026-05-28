import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { UserListPage } from './pages/UserListPage'
import { UserDetailPage } from './pages/UserDetailPage'
import {
  OverviewPage,
  OrdersPage,
  PaymentsPage,
  FamilyPage,
  UserDetailIndexRedirect,
} from './pages/UserDetailTabPages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/users/:userId" element={<UserDetailPage />}>
            <Route index element={<UserDetailIndexRedirect />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="family" element={<FamilyPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
