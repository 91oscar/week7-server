//IMPORT
import dotenv from 'dotenv'
import pg from 'pg'

//CONFIG
dotenv.config()
export const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

//CREATE TABLE
db.query(`CREATE TABLE IF NOT EXISTS mangas(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    url TEXT
)`)

// INSERT TABLE
const mangas = [
    { title: 'Naruto', author: 'Masashi Kishimoto', url: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740932/naruto-shippuden-the-official-coloring-book-9781974740932_hr.jpg' },
    { title: 'Boruto', author: 'Masashi Kishimoto and Mikio Ikemoto', url: 'https://m.media-amazon.com/images/I/71xdH9mKNuL._AC_UF894,1000_QL80_.jpg' },
    { title: 'One piece', author: 'Eiichirō Oda', url: 'https://www.escapistmagazine.com/wp-content/uploads/2023/08/onepieceranking1.jpg?resize=800%2C400' },
    { title: 'Bleach', author: 'Tite Kubo', url: 'https://wallpapers.com/images/featured/bleach-anime-pictures-x5ildyvb7u41kblh.jpg' },
    { title: 'Boku no Hero Academia', author: 'Kōhei Horikoshi', url: 'https://static.wikia.nocookie.net/whumpapedia/images/e/e6/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ%40%40._V1_.jpg/revision/latest?cb=20200605082628' },
    { title: 'Death note', author: 'Tsugumi Ohba and Takeshi Obata', url: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg' },
    { title: 'One-Punch Man', author: 'Yusuke Murata and ONE', url: 'https://i.pinimg.com/236x/c6/42/d3/c642d39d2fe134a43381460b8d6b7dd7.jpg' },
    { title: 'Demon slayer', author: 'Koyoharu Gotōge', url: 'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg' },
    { title: 'Fullmetal Alchemist', author: 'Hiromu Arakawa', url: 'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg' },
    { title: 'Dragon Ball', author: 'Akira Toriyama', url: 'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg' },
    { title: 'Tales of Demons and Gods', author: 'Mad Snail', url: 'https://m.media-amazon.com/images/I/81wDz65+NOL._AC_UF894,1000_QL80_.jpg' },
    { title: 'Tower of God', author: 'Slave In Utero', url: 'https://images.justwatch.com/poster/306967058/s718/tower-of-god.jpg' }
]

const insertManga = (title, author, url) => {
    const text = 'INSERT INTO mangas (title, author, url) VALUES($1, $2, $3)'
    const values = [title, author, url]

    db.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}

mangas.map(mangas => insertManga(mangas.title, mangas.author, mangas.url))


// db.query(`DELETE FROM mangas`)


