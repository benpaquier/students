import { useContext } from "react"

import { StudentContext } from "../contexts/Students"
import Form from "../components/Form"

const Home = () => {
  const { students } = useContext(StudentContext)

  return (
    <div className="row">
      <div className="col-6">
        <h2>List</h2>
        <ul className="list-group mt-5">
          {students.map(student => (
            <li key={student.id} className="list-group-item">
              {student.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6">
        <h2>Form</h2>
        <Form />
      </div>
    </div>
  )
}

export default Home