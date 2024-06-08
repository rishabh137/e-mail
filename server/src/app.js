// To use import express from 'express', specify "type": "modeule" in package.json
import 'dotenv/config.js'
import express from 'express'
import Connection from './db/conn.js'

const app = express()
const PORT = process.env.PORT
Connection()

app.get("/", (req, res) => {
    res.send("heeli")
})

app.listen(PORT, () => {
    console.log(`The application started at port ${PORT}`);
})