import React, { useEffect, useState } from 'react';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import { getUsers } from '../services/api';
import Response from '../interfaces/response';

function UserTable() {
  const [responseData, setResponseData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [disablePreviousButton, setDisablePreviousButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(responseData.length / 10);

  useEffect(() => {
    getUsers('/users')
      .then((response) => {
        setResponseData(response);
        setPageData(response.slice(0, 10));
      });
  }, []);

  useEffect(() => {
    const max = currentPage * 10;
    const min = max - 10;
    setPageData(responseData.slice(min, max));

    switch (currentPage) {
      case 1:
        setDisablePreviousButton(true);
        setDisableNextButton(false);
        break;
      case totalPages:
        setDisablePreviousButton(false);
        setDisableNextButton(true);
        break;
      default:
        setDisablePreviousButton(false);
        setDisableNextButton(false);
    }
  }, [currentPage]);

  const previousPage = () => {
    setCurrentPage((prevState) => (prevState - 1));
  };

  const nextPage = () => {
    setCurrentPage((prevState) => (prevState + 1));
  };

  return (
    <>
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
              <td><BiEditAlt /></td>
              <td><BiTrash /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={previousPage} disabled={disablePreviousButton}>Previous</button>
      <button type="button" onClick={nextPage} disabled={disableNextButton}>Next</button>
      <p>{ `Page ${currentPage} of ${totalPages}` }</p>
    </>

  );
}

export default UserTable;
