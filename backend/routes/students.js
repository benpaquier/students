const express = require("express")
const app = express()

let students = require("../students.json")

app.get("/", (req, res) => {
  res.json(students)
})

app.post("/", (req, res) => {
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
})

module.exports = app