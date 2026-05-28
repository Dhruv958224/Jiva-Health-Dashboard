export function PaymentsTab({ user }) {
  return (
    <section className="rounded-[14px] border border-border-light bg-white p-6">
      <h2 className="mb-6 text-lg font-medium text-text-dark">Order History</h2>
      {user.payments.length === 0 ? (
        <p className="text-sm font-medium text-muted">No payment history.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {user.payments.map((payment, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 rounded-[10px] bg-[#F5F6F7] p-4"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-medium text-joined">{payment.title}</span>
                  <span
                    className={`rounded-lg px-2 py-0.5 text-xs font-medium ${
                      payment.status === 'Completed'
                        ? 'bg-badge-active-bg text-badge-active-text'
                        : 'bg-[#FEF3C7] text-[#92400E]'
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-body-text">{payment.product}</p>
                <div className="mt-1 flex gap-4 text-xs font-medium">
                  <span className="text-muted">{payment.date}</span>
                  <span className="text-joined">{payment.price}</span>
                </div>
              </div>
              <span className="shrink-0 text-xl font-medium text-[#0D9488]">
                {payment.amount}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
