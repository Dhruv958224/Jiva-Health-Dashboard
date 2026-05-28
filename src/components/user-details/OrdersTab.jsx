export function OrdersTab({ user }) {
  return (
    <section className="rounded-[14px] border border-border-light bg-white p-6">
      <h2 className="mb-6 text-lg font-medium text-heading">Upcoming Bookings</h2>
      {user.bookings.length === 0 ? (
        <p className="text-sm font-medium text-muted">No upcoming bookings.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {user.bookings.map((booking, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 rounded-[10px] bg-[#F5F6F7] p-4"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-medium text-heading">{booking.title}</span>
                  <span className="rounded-lg bg-badge-active-bg px-2 py-0.5 text-xs font-medium text-green-dark">
                    {booking.status}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-body-text">{booking.doctor}</p>
                <div className="mt-1 flex gap-4 text-xs font-medium text-muted">
                  <span>{booking.date}</span>
                  <span>{booking.time}</span>
                  <span className="text-heading">{booking.price}</span>
                </div>
              </div>
              <button
                type="button"
                className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-heading"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
