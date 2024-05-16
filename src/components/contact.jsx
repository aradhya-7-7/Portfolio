import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tuuut2g', 'template_f8rb6ca', form.current, {
        publicKey: 'RhPJ_JJqj4_q95HbZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
        <h1 className='headingform'>Contact Me</h1>
      <form className='formElement' ref={form} onSubmit={sendEmail}>
      <label className='formName'>Name</label>
      <input className='formText' type="text" name="user_name" />
      <label className='formEmail'>Email</label>
      <input className='formemailInput' type="email" name="user_email" />
      <label className='formMessage'>Message</label>
      <textarea className='formMessageArea' name="message" />
      <input className='formButton' type="submit" value="Send" />
    </form>
    </div>

  );
};

