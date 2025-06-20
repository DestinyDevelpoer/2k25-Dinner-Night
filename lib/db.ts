import { neon } from "@neondatabase/serverless"

// Create a singleton Neon client to reuse the connection
const sql = neon(process.env.DATABASE_URL!)

export { sql }
