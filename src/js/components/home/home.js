import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { userActions } from '../../nonFeature/_actions';


  const HomePage = (props) => {
    //   const user = useSelector(state => state.user)
      const dispatch = useDispatch();
      const [loading, setLoading] = useState(false)
      // const getUsers = () = dispatch(userActions)

  useEffect(() => {
    // getUsers();
  }, [])


   const handleDeleteUser = (id) => {
        return (e) => deleteUser(id);
    }

    const[user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      });

      const[users, setUsers] = useState({
        error: false,
        loading: false,
        items: []
      });

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You are logged in !</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    
}


export default HomePage