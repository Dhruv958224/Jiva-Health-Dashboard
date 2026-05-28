export function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-border shadow-sm">
      {/* Search Bar */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg border border-border px-3 py-2 bg-transparent outline-none text-heading focus:ring-2 focus:ring-green-dark transition"
        />
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-heading">Dhruv</span>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5F0] text-sm font-medium text-green-dark hover:scale-105 transition-transform duration-200 cursor-pointer">
          D
        </div>
      </div>
    </header>
  )
}
