export function FilterDropdown({ label, options, value, onChange }) {
  return (
    <select
      className="rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )
}
