import { createContext, useState, useEffect } from "react"

const StudentContext = createContext({})

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([])
  const [newStudent, setNewStudent] = useState(null)

  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = () => {
    fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(data => setStudents(data))
  }

  const value = {
    students,
    getStudents,
    newStudent,
    setNewStudent
  }

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  )
}

export {
  StudentContext,
  StudentProvider
}