import React from 'react';
import MouseClick from '../interfaces/eventTarget';
import Response from '../interfaces/response';
import { deleteUser } from '../services/api';

function UserTable(props: { pageData: Response[] }) {
  const { pageData } = props;

  const editUser = (event: MouseClick) => {
    // eslint-disable-next-line no-unused-vars
    const { id } = event.target.parentElement;
  };

  const removeUser = (event: MouseClick) => {
    const { id } = event.target.parentElement;
    deleteUser(`/users/${id}`);
    window.location.reload();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        { pageData.map((user: Response) => (
          <tr key={user.id}>
            <td>{ user.id }</td>
            <td>{ user.name }</td>
            <td>{ user.email }</td>
            <td>{ user.password }</td>
            <td id={user.id.toString()}>
              <i className="bx bx-edit-alt edit_button" onClick={editUser} />
            </td>
            <td id={user.id.toString()}>
              <i className="bx bx-trash delete_button" onClick={removeUser} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
