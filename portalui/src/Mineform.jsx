import React, { useState } from 'react';
import './index.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    state: '',
    coordinates: '',
    severity: '',
    type: '',
    mineFoundDate: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/mineinfos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Handle success response
        // You could clear the form or show a success message
      } else {
        console.error('Submission failed');
        // Handle error response, such as showing an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors, show an error message
    }
  };

  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      <h2>Register Mine Information</h2>
      
      {/* Dynamically create input fields for each formData property */}
      {Object.keys(formData).map(key => (
        <label key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
          <input
            type={key === 'mineFoundDate' ? 'date' : 'text'}
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        </label>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
