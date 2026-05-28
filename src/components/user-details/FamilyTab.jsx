export function FamilyTab({ user }) {
  return (
    <section className="rounded-[14px] border border-border-light bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-medium text-text-dark">Family Members</h2>
        <button
          type="button"
          className="rounded-lg bg-heading px-4 py-2 text-sm font-medium text-white"
        >
          Add Member
        </button>
      </div>

      {user.family.length === 0 ? (
        <p className="text-sm font-medium text-muted">No family members added.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {user.family.map((member, i) => (
            <article
              key={`${member.name}-${i}`}
              className="flex items-center justify-between rounded-[14px] border border-border-light p-4"
            >
              <div>
                <p className="text-base font-medium text-text-dark">{member.name}</p>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-sm font-medium text-body-text">
                  <span>{member.relation}</span>
                  <span>{member.phone}</span>
                  <span className="text-muted">{member.dob}</span>
                </div>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-body-text hover:bg-page-bg"
              >
                More
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
