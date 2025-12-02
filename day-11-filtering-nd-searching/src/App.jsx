import React, { useEffect, useState, startTransition } from 'react'
import User from './components/User';
import View from './components/View';


function App() {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    startTransition(() => {
      let newUsers = JSON.parse(localStorage.getItem('list')) || [];
      setList(newUsers);
      setData(newUsers);
      setMount(true);
    });
  }, []);


  useEffect(() => {
    if (mount) {
      localStorage.setItem('list', JSON.stringify(list))
    }
  }, [list])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editId) {

      let newList = [...list, { ...user, id: Date.now() }]

      setList(newList);
      setData(newList);
    } else {
      let updateList = list.map((value) => {
        if (value.id == editId) {
          return { ...value, ...user }
        }
        return value;
      })

      setList(updateList)
      setData(updateList)
    }

    setUser({
      username: "",
      email: ""
    });

    setEditId(null)
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    let newData = list.filter((item) => {
      const username = item.username ? item.username.toLowerCase() : "";
      const email = item.email ? item.email.toLowerCase() : "";

      return username.includes(value) || email.includes(value);
    });

    setData(newData.length > 0 ? newData : list);
  };


  const handleDelete = (id) => {
    let newList = list.filter(val => val.id != id);
    setList(newList);
    setData(newList)
  }

  const handleEdit = (id) => {
    let editList = list.find(val => val.id == id);
    setUser(editList);
    setEditId(id)
  }


  return (
    <div className='container'>
      <User
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />


      <View
        users={data}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default App