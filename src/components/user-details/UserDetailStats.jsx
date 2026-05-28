export function UserDetailStats({ user }) {
  const cards = [
    { label: 'Total Orders', value: String(user.totalOrders), color: 'text-heading' },
    { label: 'Total Booking & Appointment', value: String(user.totalBookings), color: 'text-green-stat' },
    { label: 'Total Family Member', value: String(user.familyMembers), color: 'text-green-dark' },
    { label: 'Total Spent', value: user.totalSpent, color: 'text-joined', noBorder: true },
  ]

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`flex flex-col gap-2 rounded-2xl bg-white p-4 ${
            card.noBorder ? '' : 'border border-border'
          }`}
        >
          <span className="text-sm font-medium text-label">{card.label}</span>
          <span className={`text-2xl font-medium ${card.color}`}>{card.value}</span>
        </div>
      ))}
    </div>
  )
}
