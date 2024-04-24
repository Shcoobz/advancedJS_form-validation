import { useState } from 'react';
import { handleChange, validatePasswords, handleSubmit } from '../utils/formUtils.js';
import FormField from './FormField';
import Message from './Message';

/**
 * Represents a sign-up form component with input fields and submission handling.
 * @const {Function} SignUpForm - Functional component for the sign-up form.
 * @returns {JSX.Element} - JSX element representing the sign-up form.
 */
const SignUpForm = () => {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    password1: '',
    password2: '',
  });
  const [message, setMessage] = useState("Don't Hesitate!");
  const [messageColor, setMessageColor] = useState('black');

  const handleFormSubmit = (e) =>
    handleSubmit(
      e,
      user,
      (user, setMessage, setMessageColor) =>
        validatePasswords(user, setMessage, setMessageColor),
      setMessage,
      setMessageColor
    );

  return (
    <div className='container'>
      <h1>Sign Up Today!</h1>
      <form id='form' className='form' onSubmit={handleFormSubmit}>
        <FormField
          label='Full Name'
          type='text'
          name='name'
          placeholder='Full Name'
          required
          minLength={3}
          maxLength={100}
          value={user.name}
          onChange={(e) => handleChange(e, user, setUser)}
        />
        <FormField
          label='Phone Number'
          type='tel'
          name='phone'
          placeholder='555-555-5555'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          required
          value={user.phone}
          onChange={(e) => handleChange(e, user, setUser)}
        />
        <FormField
          label='Email Address'
          type='email'
          name='email'
          placeholder='email@address.com'
          required
          value={user.email}
          onChange={(e) => handleChange(e, user, setUser)}
        />
        <FormField
          label='Website URL'
          type='url'
          name='website'
          placeholder='http://google.com'
          required
          value={user.website}
          onChange={(e) => handleChange(e, user, setUser)}
        />
        <FormField
          label='Password'
          type='password'
          name='password1'
          placeholder='Create Password (Min. 8 Characters)'
          pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
          required
          value={user.password1}
          onChange={(e) => handleChange(e, user, setUser)}
        />
        <FormField
          label='Confirm Password'
          type='password'
          name='password2'
          placeholder='Confirm Password'
          pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
          required
          value={user.password2}
          onChange={(e) => handleChange(e, user, setUser)}
        />
        <button type='submit'>Register</button>
      </form>
      <Message text={message} color={messageColor} />
    </div>
  );
};

export default SignUpForm;
