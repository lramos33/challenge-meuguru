import React from 'react';

function UserForms(props: any) {
  const { formData, setFormData } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <label htmlFor="name">
        <p>Name:</p>
        <input type="name" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label htmlFor="email">
        <p>Email:</p>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

      <label htmlFor="password">
        <p>Password:</p>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
    </form>
  );
}

export default UserForms;
