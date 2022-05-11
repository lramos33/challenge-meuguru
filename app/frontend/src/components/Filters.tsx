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
    <div className="filters__content">
      <div className="filters__input_div">
        <label htmlFor="email">
          <div className="filters__input_title">
            <i className="bx bxs-user filters__icon" />
            <p>Name:</p>
          </div>
          <input
            className="filters__input"
            type="text"
            name="name"
            autoComplete="off"
            onChange={({ target: { value } }: any) => setName(value)}
          />
        </label>
      </div>
      <div className="filters__input_div">
        <label htmlFor="email">
          <div className="filters__input_title">
            <i className="bx bxs-envelope filters__icon" />
            <p>Email:</p>
          </div>
          <input
            className="filters__input"
            type="text"
            name="Email"
            autoComplete="off"
            onChange={({ target: { value } }: any) => setEmail(value)}
          />
        </label>
      </div>
    </div>
  );
}

export default Filters;
