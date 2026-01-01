import express from 'express'
import fs from 'fs'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

const dbPath = path.join(__dirname, 'akun.json')

// Helper function to read/write DB
const getDb = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            // Create file if it doesn't exist
            fs.writeFileSync(dbPath, '[]', 'utf8')
            return []
        }
        return JSON.parse(fs.readFileSync(dbPath, 'utf8'))
    } catch (err) {
        return []
    }
}

// REGISTER
app.post('/register', (req, res) => {
    const { name, email, password } = req.body

    const data = getDb()

    const alreadyExists = data.find(user => user.email === email)
    if (alreadyExists) {
        return res.status(400).json({ message: 'Akun sudah terdaftar' })
    }

    data.push({ name, email, password })
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

    res.json({ message: 'Daftar berhasil' })
})

// LOGIN
app.post('/login', (req, res) => {
    const { email, password } = req.body

    const data = getDb()

    const user = data.find(
        user => user.email === email && user.password === password
    )

    if (!user) {
        return res.status(401).json({ message: 'Email atau password salah' })
    }

    res.json({ message: 'Login sukses', user: { name: user.name, email: user.email } })
})

// GOOGLE LOGIN (SIMULATION)
app.post('/google-login', (req, res) => {
    const { email, name, avatar } = req.body

    const data = getDb()

    // Cek apakah user sudah ada
    let user = data.find(u => u.email === email)

    if (user) {
        // Update name/avatar if they exist and are different
        if (name) user.name = name
        if (avatar) user.avatar = avatar
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
        return res.json({ message: 'Login Google Sukses', user })
    }

    // Jika belum ada, buat akun baru otomatis
    const newUser = {
        name: name || 'Google User',
        email,
        password: 'GOOGLE_LOGIN_NO_PASSWORD', // Placeholder
        avatar: avatar || ""
    }

    data.push(newUser)
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

    res.json({ message: 'Register & Login Google Sukses', user: newUser })
})

app.listen(3000, () => console.log('Server jalan di http://localhost:3000'))
