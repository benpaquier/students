const express = require("express")
const app = express()

let students = require("../students.json")

app.get("/", (req, res) => {
  res.json(students)
})

app.post("/", (req, res) => {
  // on cherche dans le tableau `students` si un student a un name
  // égal au name passé dans la requete
  // soit ca renvoie l'element du tableau qui correspond ({ id:1, name: "Kevin" })
  // soit ca renvoie undefined
  const existingStudent = students.find(student => student.name === req.body.name)
  console.log(existingStudent)

  if (existingStudent) { // si l'etudiant existe, je renvoie une erreur
    res.status(409).send("Student existe deja")
  } else { // sinon s'il n'existe pas, je le crée
    // on créer une nouvelle ressource student
    const student = {
      id: students.length + 1,
      ...req.body
    }

    // on pousse notre nouvelle ressource student
    // dans notre tableau students existant
    // équivalent => students.push(student)
    students = [ ...students, student ]

    // on renvoie la donnée qu'on vien de créer
    res.json(student)
  }
})

module.exports = app