import TicketConfirmationForm from "@/components/ticket-confirmation-form"

export const metadata = {
  title: "Confirm Ticket",
}

export default function ConfirmTicketPage() {
  return (
    <main className="container mx-auto max-w-lg py-10">
      <h2 className="mb-6 text-2xl font-bold">Confirm your ticket</h2>
      {/* Server component that lists paid attendees */}
      <TicketConfirmationForm />
    </main>
  )
}
