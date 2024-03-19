import React, { useState } from 'react';
import '../styles/RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    isHidden: false,
    state: '',
    coordinates: '',
    severity: '',
    type: '',
    mineFoundDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can integrate the form submission logic, like sending data to a backend server.
  };

  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      <h2>Register Mine Information</h2>
      {/* Iterate over Object.keys(formData).map() if you want a more dynamic form */}
      <label>
        Is Hidden:
        <input
          type="checkbox"
          name="isHidden"
          checked={formData.isHidden}
          onChange={(e) => setFormData({...formData, isHidden: e.target.checked})}
        />
      </label>
      {/* For the rest of the fields, use a similar approach with input or select elements as needed */}
      {/* Example for a text field: */}
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      {/* Continue with other fields... */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
