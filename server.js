
//IMPORT
import Express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pg from 'pg'

//CONFIG
const app = Express()
app.disable('x.disable-by')
app.use(cors())
dotenv.config()
export const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

//PORT
const PORT = process.env.PORT ?? 1234
app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})

//GET Route
app.get('/', (req, res) => {
    try {
        res.send('work!')
    } catch (err) {
        res.status(200).json({ error: err.message })
    }
})

app.get('/manga', async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM mangas')
        res.json(data.rows)
    } catch (err) {
        res.status(200).json({ error: err.message })
    }
})

//POST Route

// app.post('/manga', async (req, res) => {
//     try {
//         let query = 'INTERT INTO mangas'
//     } catch (err) {
//         res.status(200).json({ error: err.message })
//     }
// })

