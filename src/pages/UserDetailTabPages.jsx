import { Navigate, useOutletContext, useParams } from 'react-router-dom'
import { FamilyTab } from '../components/user-details/FamilyTab'
import { OrdersTab } from '../components/user-details/OrdersTab'
import { OverviewTab } from '../components/user-details/OverviewTab'
import { PaymentsTab } from '../components/user-details/PaymentsTab'

function useUserDetail() {
  return useOutletContext()
}

export function OverviewPage() {
  const { user } = useUserDetail()
  return <OverviewTab user={user} />
}

export function OrdersPage() {
  const { user } = useUserDetail()
  return <OrdersTab user={user} />
}

export function PaymentsPage() {
  const { user } = useUserDetail()
  return <PaymentsTab user={user} />
}

export function FamilyPage() {
  const { user } = useUserDetail()
  return <FamilyTab user={user} />
}

export function UserDetailIndexRedirect() {
  const { userId } = useParams()
  return <Navigate to={`/users/${userId}/overview`} replace />
}
