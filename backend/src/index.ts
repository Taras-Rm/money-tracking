import express from "express"

import type { Request, Response } from "express"
import client from "./db/index.ts"

const PORT = 3000

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send(async () => (await client.user.findMany()))
})

app.listen(PORT, () => {
    console.log(`Listening server on port: ${PORT}`)
})