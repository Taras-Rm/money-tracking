import express from "express"

import router from "./routes/index.ts"

const PORT = 3000

const app = express()

app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Listening server on port: ${PORT}`)
})