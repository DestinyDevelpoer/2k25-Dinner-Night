import { neon } from "@neondatabase/serverless"

// Initialize the Neon client using the DATABASE_URL environment variable
export const sql = neon(process.env.DATABASE_URL!)
