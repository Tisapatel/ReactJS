import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/home/Page'
import About from './components/about/Page'
import Header from './components/Header'

function App() {

  const [employee, setEmployee] = useState({})
  const [employeeList, setEmployeeList] = useState([])
  const [editId, setEditId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee({ ...employee, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!editId) {
      setEmployeeList([...employeeList, { ...employee, id: Date.now() }])
    } else {
      const updatedList = employeeList.map(emp =>
        emp.id === editId ? { ...emp, ...employee } : emp
      )
      setEmployeeList(updatedList)
      setEditId(null)
    }

    setEmployee({})
  }

  const handleDelete = (id) => {
    setEmployeeList(employeeList.filter(emp => emp.id !== id))
  }

  const handleEdit = (id) => {
    const editData = employeeList.find(emp => emp.id === id)
    setEmployee(editData)
    setEditId(id)
  }

  return (
    <>
      <Header />

      <Routes>
        <Route
          index
          element={
            <Home
              employee={employee}
              employeeList={employeeList}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
