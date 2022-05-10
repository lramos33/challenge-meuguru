import React from 'react';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import Response from '../interfaces/response';

function UserTable(props: { pageData: Response[] }) {
  const { pageData } = props;

  const editUser = () => {
    console.log('click edit');
  };

  const removeUser = () => {
    console.log('click remove');
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
            <td><BiEditAlt onClick={editUser} /></td>
            <td><BiTrash onClick={removeUser} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
