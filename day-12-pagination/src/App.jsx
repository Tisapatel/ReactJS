import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Data from './components/Data'

function App() {

  // Load data from localStorage
  const [list, setList] = useState(() => {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  });

  const [user, setUser] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(list.length / itemsPerPage);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(list));
  }, [list]);


  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.username?.trim() || !user.email?.trim()) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...list];
      updated[editIndex] = user;
      setList(updated);
      setEditIndex(null);
    } else {
      setList([...list, user]);
    }

    setUser({});
  };


  const handleDelete = (globalIndex) => {
    let newList = list.filter((_, i) => i !== globalIndex);
    setList(newList);
  };


  const handleEdit = (globalIndex) => {
    setUser(list[globalIndex]);
    setEditIndex(globalIndex);
  };


  return (
    <div>
      <h2 className='text-center m-5'>User Form</h2>

      <Form 
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <h2 className='text-center m-5'>User Data</h2>

      <Data 
        list={currentItems}                // only current page data
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        indexOfFirstItem={indexOfFirstItem} // for correct index mapping
      />

      {/* Pagination */}
      <div className='d-flex justify-content-center mt-4'>
        <button 
          className='btn btn-primary mx-2'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span className='mx-3 fs-5'>Page {currentPage} of {totalPage}</span>

        <button 
          className='btn btn-primary mx-2'
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default App;
