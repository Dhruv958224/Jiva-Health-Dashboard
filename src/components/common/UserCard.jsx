import { Link } from 'react-router-dom'

export function UserCard({ user }) {
  return (
    <Link
      to={`/users/${user.id}`}
      className="flex items-center justify-between rounded-lg border border-border bg-white p-4 hover:bg-page-bg"
    >
      <div>
        <h3 className="text-base font-medium text-heading">{user.name}</h3>
        <p className="text-sm text-label">{user.email}</p>
      </div>
      <span className="text-sm font-medium text-green-dark">{user.status}</span>
    </Link>
  )
}
