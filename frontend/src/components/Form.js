import { useContext, useState } from "react"
import { StudentContext } from "../contexts/Students"

import { useNavigate } from 'react-router-dom'

const Form = () => {
  const { getStudents, setNewStudent } = useContext(StudentContext)
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const student = {
      name
    }
    
    // par défaut le fetch il fait un get
    // mais on peut préciser un deuxieme parametre
    // qui est un objet dans lequel on peut changer 
    // la méthode (a post par exemple), dire qu'on 
    // veut du json, et passer notre body
    fetch('http://localhost:5000/students', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })
      .then(response => response.json())
      .then(data => {
        setNewStudent(data)
        navigate('/validation')
        getStudents()
        setName("")
        setError("")
      })
      .catch(error => setError("Student existe deja"))
  }

  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}

export default Form