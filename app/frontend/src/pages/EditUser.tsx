import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForms from '../components/UserForms';
import { getUsers, updateUser } from '../services/api';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const INITIAL_FORM_STATE = {
    id,
    name: '',
    email: '',
    password: '',
  };

  const [failedRequest, setFailedRequest] = useState(false);
  const [failedRequestMessage, setFailedRequestMessage] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    getUsers(`/users/${id}`)
      .then((response) => {
        setFormData(response);
      });
  }, []);

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
      <UserForms formData={formData} setFormData={setFormData} />
      <button type="submit" onClick={() => { navigate('/users'); }}>Cancel</button>
      <button type="submit" onClick={(event) => submitForm(event)}>Save changes</button>
      { (failedRequest) ? <p>{ failedRequestMessage }</p> : null }
    </>
  );
}

export default EditUser;
