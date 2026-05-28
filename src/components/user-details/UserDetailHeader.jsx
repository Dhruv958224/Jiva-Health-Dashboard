import { Link } from 'react-router-dom'

export function UserDetailHeader({ user }) {
  return (
    <div className="flex flex-col gap-6">
      <Link
        to="/"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-body-text hover:text-heading"
      >
        ← Back to User Management
      </Link>

      <div className="flex items-start justify-between gap-6">
        <div className="flex gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E8F5F0] text-2xl font-medium text-green-dark">
            {user.initials}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-joined">{user.name}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-badge-active-bg px-2 py-0.5 text-xs font-medium text-badge-active-text">
                {user.statusBadge}
              </span>
              <span className="rounded-lg border border-border-light px-2 py-0.5 text-xs font-medium text-body-text">
                {user.roleBadge}
              </span>
              <span className="rounded-lg border border-border-light px-2 py-0.5 text-xs font-medium text-body-text">
                {user.tierBadge}
              </span>
              <span className="text-sm font-medium text-body-text">ID: #{user.id}</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-body-text">
              <span>{user.joinedDisplay}</span>
              <span>{user.lastActive}</span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="rounded-lg bg-gradient-to-r from-[#fe9a00] to-[#e17100] px-3 py-2 text-sm font-medium text-white"
          >
            Upgrade to Prime
          </button>
          <button
            type="button"
            className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-text-dark"
          >
            {user.statusBadge}
          </button>
        </div>
      </div>
    </div>
  )
}
