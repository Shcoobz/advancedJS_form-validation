/**
 * Handles changes in form fields by updating the user state.
 * @param {Event} e - The input change event.
 * @param {Object} user - The user state object.
 * @param {Function} setUser - The function to update the user state.
 */
export const handleChange = (e, user, setUser) => {
  const { name, value } = e.target;
  setUser((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

/**
 * Validates that the passwords match and sets error message if not.
 * @param {Object} user - The user state object containing passwords.
 * @param {Function} setMessage - The function to set the message state.
 * @param {Function} setMessageColor - The function to set the message color state.
 * @returns {boolean} - Indicates if the passwords are valid.
 */
export const validatePasswords = (user, setMessage, setMessageColor) => {
  if (user.password1 !== user.password2) {
    setMessage('Make sure passwords match.');
    setMessageColor('red');
    return false;
  }
  return true;
};

/**
 * Handles form submission, validates passwords, and displays success/error messages.
 * @param {Event} e - The form submission event.
 * @param {Object} user - The user state object containing form data.
 * @param {Function} validatePasswords - The function to validate passwords.
 * @param {Function} setMessage - The function to set the message state.
 * @param {Function} setMessageColor - The function to set the message color state.
 */
export const handleSubmit = (e, user, validatePasswords, setMessage, setMessageColor) => {
  e.preventDefault();
  if (!validatePasswords(user, setMessage, setMessageColor)) return;
  console.log(user);
  setMessage('Successfully Registered!');
  setMessageColor('green');
};
