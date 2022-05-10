import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUsers, updateUser } from '../services/api';
import UserForms from '../components/UserForms';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [failedRequest, setFailedRequest] = useState(false);
  const [failedRequestMessage, setFailedRequestMessage] = useState('');
  const [formData, setFormData] = useState();

  useEffect(() => {
    getUsers(`/users/${id}`)
      .then((response) => {
        setFormData(response);
      });
  }, []);

  const cancelForm = () => {
    navigate('/users');
  };

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateUser(`/users/${id}`, formData)
      .then(() => {
        setFailedRequest(false);
        navigate('/users');
      })
      .catch((error) => {
        setFailedRequest(true);
        setFailedRequestMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p>{ `Edit User ${id} Page` }</p>
      <UserForms
        formData={formData}
        setFormData={setFormData}
      />
      <button
        type="submit"
        onClick={cancelForm}
      >
        Cancel
      </button>
      <button
        type="submit"
        onClick={(event) => submitForm(event)}
      >
        Save changes
      </button>
      { (failedRequest) ? <p>{ failedRequestMessage }</p> : null }
    </>
  );
}

export default EditUser;
