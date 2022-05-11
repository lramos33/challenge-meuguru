import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import Header from '../components/Header';
import Filters from '../components/Filters';
import UserTable from '../components/UserTable';
import TableButtons from '../components/TableButtons';

function Users() {
  const [responseData, setResponseData] = useState([]);
  const [filteredResponseData, setFilteredResponseData] = useState([]);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    getUsers('/users')
      .then((response) => {
        setResponseData(response);
        setFilteredResponseData(response);
        setPageData(response.slice(0, 10));
      });
  }, []);

  useEffect(() => {
    setPageData(filteredResponseData.slice(0, 10));
  }, [filteredResponseData]);

  return (
    <div className="page_content">
      <Header />
      <div className="users__container">
        <p className="users__title">Users</p>
        <p className="users__subtitle">Find by</p>
        <Filters
          responseData={responseData}
          setFilteredResponseData={setFilteredResponseData}
        />
        <UserTable
          pageData={pageData}
        />
        <TableButtons
          filteredResponseData={filteredResponseData}
          setPageData={setPageData}
        />
      </div>
    </div>
  );
}

export default Users;
