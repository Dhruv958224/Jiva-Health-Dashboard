import { Navigate, Outlet, useParams } from 'react-router-dom'
import { UserDetailHeader } from '../components/user-details/UserDetailHeader'
import { UserDetailStats } from '../components/user-details/UserDetailStats'
import { UserDetailTabs } from '../components/user-details/UserDetailTabs'
import { getUserById } from '../data/users'

export function UserDetailPage() {
  const { userId } = useParams()
  const user = userId ? getUserById(userId) : undefined

  if (!user) return <Navigate to="/" replace />

  return (
    <main className="p-6">
      <UserDetailHeader user={user} />
      <UserDetailStats user={user} />
      <UserDetailTabs userId={user.id} />
      <Outlet context={{ user }} />
    </main>
  )
}
