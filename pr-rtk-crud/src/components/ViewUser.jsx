import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../features/users/UserSlice';
import '../css/style.css';

const ViewUser = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();
    
  return (
    <div className='viewuser-container'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-11 col-lg-10'>
            <div className='viewuser-card'>
              
              <div className='mb-4'>
                <h2 className='viewuser-title'>View All Users</h2>
                <p className='viewuser-subtitle'>Manage your users efficiently</p>
              </div>

              <div className='table-responsive'>
                <table className='table table-dark-custom'>
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.length > 0 ? (
                        users.map((user, index) => {
                          const {id, username, email, password} = user;
                          return (
                            <tr key={id}>
                              <td>{index + 1}</td>
                              <td><strong>{username}</strong></td>
                              <td>{email}</td>
                              <td>{'•'.repeat(password?.length || 8)}</td>
                              <td>
                                <button 
                                  type="button" 
                                  onClick={() => dispatch(editUser(id))} 
                                  className="btn btn-edit"
                                >
                                  Edit
                                </button>
                                <button 
                                  type="button" 
                                  onClick={() => dispatch(deleteUser(id))} 
                                  className="btn btn-delete"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })
                      ) : (
                        <tr>
                          <td colSpan="5">
                            <div className='empty-state'>
                              <div className='empty-state-text'>No users found</div>
                              <p className='empty-state-subtext'>Add some users to get started</p>
                            </div>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUser