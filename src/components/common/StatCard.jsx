export function StatCard({ label, value, color }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-4">
      <span className="text-sm font-medium text-label">{label}</span>
      <span className={`text-2xl font-medium ${color}`}>{value}</span>
    </div>
  )
}
