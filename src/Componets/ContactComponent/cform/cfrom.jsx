import React, { useState } from 'react';
import './cfrom.css'

const CForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    for (const key in formData) {
      if (formData[key].trim() === '') {
        setFormError('Please fill in all fields.');
        return;
      }
    }

    
    console.log('Form submitted with data:', formData);

    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setFormError('');
  };

  return (
    <div className='cform'>
      <div className='ctext'>
        <h2>Contact Us</h2>
        <p>Please feel free to contact us using this form</p>
      </div>

      <form onSubmit={handleSubmit}>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}

        <div className='name'>
          <label>
            <p className='pform'>First Name<span className='sform'> (Requried)</span></p>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>

          <label>
             <p className='pform'>Last Name<span className='sform'> (Requried)</span></p>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
        </div>

        <label>
           <p className='pform'>Email<span className='sform'> (Requried)</span></p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
           <p className='pform'>Subject<span className='sform'> (Requried)</span></p>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>

        <label>
           <p className='pform'>Message<span className='sform'> (Requried)</span></p>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CForm;