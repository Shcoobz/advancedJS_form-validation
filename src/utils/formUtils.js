// Function to handle changes in form fields
export const handleChange = (e, user, setUser) => {
  const { name, value } = e.target;
  setUser((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

// Function to validate that both passwords match
export const validatePasswords = (user, setMessage, setMessageColor) => {
  if (user.password1 !== user.password2) {
    setMessage('Make sure passwords match.');
    setMessageColor('red');
    return false;
  }
  return true;
};

// Function to handle form submission
export const handleSubmit = (e, user, validatePasswords, setMessage, setMessageColor) => {
  e.preventDefault();
  if (!validatePasswords(user, setMessage, setMessageColor)) return;
  console.log(user);
  setMessage('Successfully Registered!');
  setMessageColor('green');
};
