const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000

// import des routes depuis le fichier ./routes/students
const students = require("./routes/students")

// j'ouvre mon serveur a toutes les requetes exterieures
app.use(cors())

// permet de lire le body de l'objet req (req.body)
app.use(express.json())

// utilisation des routes importées depuis
// le fichier ./routes/students
// on utilise le préfixe `/students` pour nos routes
app.use('/students', students)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})