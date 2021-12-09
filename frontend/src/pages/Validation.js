import { useContext } from "react"
import { Link } from "react-router-dom"

import { StudentContext } from "../contexts/Students"

const Validation = () => {
  const { newStudent } = useContext(StudentContext)

  return (
    <div>
      Bravo {newStudent.name}, vous etes inscrit!
      <br />
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default Validation