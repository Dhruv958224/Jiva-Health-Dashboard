import { NavLink } from 'react-router-dom'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'orders', label: 'Orders & Bookings' },
  { id: 'payments', label: 'Payments' },
  { id: 'family', label: 'Family Members' },
]

export function UserDetailTabs({ userId }) {
  return (
    <nav className="flex gap-6 border-b border-border">
      {tabs.map(({ id, label }) => (
        <NavLink
          key={id}
          to={`/users/${userId}/${id}`}
          className={({ isActive }) =>
            `border-b-2 pb-3 text-sm font-medium transition-colors ${
              isActive
                ? 'border-green-dark text-green-dark'
                : 'border-transparent text-heading hover:text-green-dark'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
