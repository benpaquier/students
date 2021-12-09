import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { StudentProvider } from './contexts/Students'
import Home from './pages/Home'
import Validation from './pages/Validation'

const App = () => {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/validation" element={<Validation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StudentProvider>
  )
}

export default App