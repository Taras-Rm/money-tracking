import express from "express"

import type { Request, Response } from "express"

const PORT = 3001

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!!dx!")
})

app.listen(PORT, () => {
    console.log(`Listening server on port: ${PORT}`)
})