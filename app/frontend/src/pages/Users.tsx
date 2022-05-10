import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import UserTable from '../components/UserTable';
import TableButtons from '../components/TableButtons';

function Users() {
  const [responseData, setResponseData] = useState([]);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    getUsers('/users')
      .then((response) => {
        setResponseData(response);
        setPageData(response.slice(0, 10));
      });
  }, []);

  return (
    <>
      <p>Users Page</p>
      <UserTable
        pageData={pageData}
      />
      <TableButtons
        responseData={responseData}
        setPageData={setPageData}
      />
    </>
  );
}

export default Users;
