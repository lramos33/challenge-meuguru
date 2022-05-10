import React, { useState } from 'react';

function RegisterForm() {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event: { target: { name: string; value: string; }; }): void => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // POST REQUEST HERE
  };

  return (
    <form>
      <label htmlFor="name">
        <p>Name:</p>
        <input type="name" name="name" onChange={handleChange} />
      </label>

      <label htmlFor="email">
        <p>Email:</p>
        <input type="email" name="email" onChange={handleChange} />
      </label>

      <label htmlFor="password">
        <p>Password:</p>
        <input type="password" name="password" onChange={handleChange} />
      </label>

      <button type="submit" onClick={(event) => submitForm(event)}>Submit</button>
    </form>
  );
}

export default RegisterForm;
