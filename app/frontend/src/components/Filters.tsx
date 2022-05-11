import React, { useState, useEffect } from 'react';
import Response from '../interfaces/response';

function Filters(props: { responseData: Response[], setFilteredResponseData: Function }) {
  const { responseData, setFilteredResponseData } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setFilteredResponseData(responseData.filter((user) => user.name.includes(name)));
  }, [name]);

  useEffect(() => {
    setFilteredResponseData(responseData.filter((user) => user.email.includes(email)));
  }, [email]);

  return (
    <>
      <p>Filter component</p>
      <label htmlFor="email">
        <p>Name:</p>
        <input
          type="text"
          name="name"
          autoComplete="off"
          onChange={({ target: { value } }: any) => setName(value)}
        />
      </label>
      <label htmlFor="email">
        <p>Email:</p>
        <input
          type="text"
          name="Email"
          autoComplete="off"
          onChange={({ target: { value } }: any) => setEmail(value)}
        />
      </label>
    </>
  );
}

export default Filters;
