import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
// import { fetchUsers } from '../../redux/Thunk/Thunk.js';
import './products.scss';
// const users = [];
function Products() {
  const { users, pending, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    console.log(users);
    return () => {};
  }, []);
  const loadUsers = async () => {
    // dispatch(fetchUsers());
    navigate('/stores/new');
  };
  return (
    <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1>ALL USERS</h1>
          <button type="button" onClick={loadUsers}>
            Load Users
          </button>
        </div>
        <div class="panel-body">
          <table class="table-latitude">
            <caption>users Information</caption>
            <thead>
              <th>Name</th>
              <th>Website</th>
              <th>E-mail</th>
            </thead>
            <tfoot>
              <tr>
                <td colspan={3}>
                  Contact details for the Knowledge and Development
                  Team
                </td>
              </tr>
            </tfoot>
            <tbody>
              {pending && <h1>Loading...</h1>}
              {error && <h1>Something went wrong...</h1>}
              {users?.map((user) => {
                return (
                  <tr>
                    <th>{user.name}</th>
                    <td>{user.website}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
