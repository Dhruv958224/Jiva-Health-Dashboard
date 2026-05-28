export function OverviewTab({ user }) {
  const infoRows = [
    { label: 'Email:', value: user.email },
    { label: 'Phone:', value: user.detailPhone },
    { label: 'Date of Birth:', value: user.dob },
    { label: 'Gender:', value: user.gender },
    { label: 'Blood Group:', value: user.bloodGroup },
  ]

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex flex-1 flex-col gap-6">
        {/* Personal Info */}
        <section className="rounded-2xl border border-border bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-medium text-heading">Personal Information</h2>
            <button
              type="button"
              className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-heading"
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-start gap-3">
                <span className="w-28 shrink-0 text-sm font-medium text-[#9CA3AF]">{row.label}</span>
                <span className="text-sm font-medium text-heading">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Addresses */}
        <section className="rounded-2xl border border-border bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-medium text-heading">Addresses</h2>
            <button
              type="button"
              className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-heading"
            >
              Add
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {user.addresses.map((addr, i) => (
              <div
                key={`${addr.title}-${i}`}
                className={`flex gap-4 rounded-[10px] p-4 ${
                  addr.isDefault ? 'bg-page-bg' : 'border border-border bg-white'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-heading">{addr.title}</h3>
                    {addr.isDefault && (
                      <span className="rounded-lg border border-border-light px-2 py-0.5 text-xs font-medium text-heading">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-body-text">{addr.line1}</p>
                  <p className="text-sm font-medium text-body-text">{addr.line2}</p>
                  <p className="text-sm font-medium text-body-text">{addr.country}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Activity */}
      <section className="w-full rounded-[14px] border border-border-light bg-white p-6 lg:w-[360px] lg:shrink-0">
        <h2 className="mb-6 text-base font-medium text-text-dark">Recent Activity</h2>
        {user.activities.length === 0 ? (
          <p className="text-sm font-medium text-muted">No recent activity.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {user.activities.map((activity, i) => (
              <div key={i} className="border-b border-border pb-6 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-heading">{activity.title}</p>
                <p className="text-sm font-medium text-label">{activity.description}</p>
                <p className="mt-1 text-xs font-medium text-label">{activity.time}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
