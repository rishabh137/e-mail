// To use import express from 'express', specify "type": "modeule" in package.json
import 'dotenv/config.js'
import express from 'express'
import Connection from './db/conn.js'
import router from './routes/route.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT
Connection()
app.use(cors())     // above router
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`The application started at port ${PORT}`);
})