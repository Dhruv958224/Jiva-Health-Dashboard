import { useMemo, useState } from 'react'
import { FilterDropdown } from '../components/common/FilterDropdown'
import { StatCard } from '../components/common/StatCard'
import { UserCard } from '../components/common/UserCard'
import {
  ROLE_FILTER_OPTIONS,
  STATUS_FILTER_OPTIONS,
  stats,
  users,
} from '../data/users'
import { filterUsers } from '../utils/filterUsers'

export function UserListPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [roleFilter, setRoleFilter] = useState('All Roles')

  const filteredUsers = useMemo(
    () => filterUsers(users, search, statusFilter, roleFilter),
    [search, statusFilter, roleFilter],
  )

  return (
    <main className="p-6">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl font-medium text-heading">User Management</h1>
        <button className="rounded-lg bg-heading px-4 py-2 text-sm font-medium text-white">
          Add User
        </button>
      </div>

      <div className="flex gap-6 mb-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users..."
          className="flex-1 rounded-lg border border-border bg-white px-3 py-3 outline-none"
        />
        <FilterDropdown
          label="Status filter"
          options={STATUS_FILTER_OPTIONS}
          value={statusFilter}
          onChange={setStatusFilter}
        />
        <FilterDropdown
          label="Role filter"
          options={ROLE_FILTER_OPTIONS}
          value={roleFilter}
          onChange={setRoleFilter}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  )
}
