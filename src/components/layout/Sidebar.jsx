import { NavLink } from 'react-router-dom'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-border p-6 shadow-md">
      <h1 className="text-xl font-bold mb-6 text-green-dark">Jiva Health</h1>
      <nav className="flex flex-col gap-2">
        {['Users', 'Reports', 'Settings'].map((item) => (
          <NavLink
            key={item}
            to="/"
            className="px-3 py-2 rounded-lg text-heading hover:bg-green-50 hover:text-green-dark transition-colors duration-200"
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
