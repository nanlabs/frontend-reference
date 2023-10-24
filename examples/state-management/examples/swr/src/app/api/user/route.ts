import { db } from "@/lib/db"

export async function POST(req, res) {
  const { name, email, password } = req.body
  const user = await db.user.create({ data: { name, email } })
  res.json({ user })
}
