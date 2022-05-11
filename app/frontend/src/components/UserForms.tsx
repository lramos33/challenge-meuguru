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
      <div className="forms__input_div">
        <label htmlFor="name">
          <div className="forms__input_title">
            <i className="bx bxs-user forms__icon" />
            <p>Name:</p>
          </div>
          <input
            className="forms__input"
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="forms__input_div">
        <label htmlFor="email">
          <div className="forms__input_title">
            <i className="bx bxs-envelope forms__icon" />
            <p>Email:</p>
          </div>
          <input
            className="forms__input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="forms__input_div">
        <label htmlFor="password">
          <div className="forms__input_title">
            <i className="bx bxs-lock-alt forms__icon" />
            <p>Password:</p>
          </div>
          <input
            className="forms__input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}

export default UserForms;
