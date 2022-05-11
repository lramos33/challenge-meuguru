import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUsers, updateUser } from '../services/api';
import UserForms from '../components/UserForms';

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
    <div className="page_content">
      <div className="edituser__container">
        <img className="avatar__img" src="../../public/img/avatar.svg" alt="avatar" />
        <p className="edituser__title">Edit User</p>
        <UserForms
          formData={formData}
          setFormData={setFormData}
        />
        { (failedRequest) ? <p className="edituser__failed">{ failedRequestMessage }</p> : null }
        <div className="edituser__btn_div">
          <button
            className="edituser__cancel_btn"
            type="submit"
            onClick={cancelForm}
          >
            Cancel
          </button>
          <button
            className="edituser__submit_btn"
            type="submit"
            onClick={(event) => submitForm(event)}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
