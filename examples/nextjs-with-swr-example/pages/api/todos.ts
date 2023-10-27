import { db } from "@/lib/db";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
 switch (req.method) {
  case "GET":
    const todos = await db.todo.findMany();
    return res.status(200).json(todos);
  case "POST":
    const todo = await db.todo.create({ data: req.body });
    return res.status(200).json(todo);
  case "PUT":
    const updatedTodo = await db.todo.update(req.body.id, req.body);
    return res.status(200).json(updatedTodo);
  default:
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
