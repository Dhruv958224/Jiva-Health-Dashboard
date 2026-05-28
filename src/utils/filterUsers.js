export function filterUsers(users, search, statusFilter, roleFilter) {
  return users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === 'All Status' || u.status === statusFilter

    const matchesRole =
      roleFilter === 'All Roles' || u.role === roleFilter

    return matchesSearch && matchesStatus && matchesRole
  })
}
