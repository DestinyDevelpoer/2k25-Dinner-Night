import { getPaidNamesAndAmounts } from "@/lib/actions"

export default async function TicketConfirmationForm() {
  const attendees = await getPaidNamesAndAmounts()

  if (!attendees.length) {
    return <p className="text-muted-foreground">No paid attendees yet.</p>
  }

  return (
    <ul className="space-y-2">
      {attendees.map((a) => (
        <li key={a.name} className="flex items-center justify-between rounded-md border p-3">
          <span>{a.name}</span>
          <span className="font-medium">${(a.amount / 100).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  )
}
