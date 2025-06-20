"use server"

import { sql } from "@/lib/db"

export async function getPaidNamesAndAmounts() {
  try {
    const paidAttendees = await sql`
      SELECT
        full_name AS name,
        amount_paid_cents AS amount
      FROM
        attendees
      WHERE
        paid = TRUE;
    `

    // Ensure the returned data matches the expected structure
    return paidAttendees.map((attendee) => ({
      name: attendee.name,
      amount: attendee.amount,
    }))
  } catch (error) {
    console.error("Error fetching paid attendees:", error)
    // Re-throw the error or return an empty array/appropriate error state
    throw new Error("Failed to fetch paid attendees.")
  }
}
