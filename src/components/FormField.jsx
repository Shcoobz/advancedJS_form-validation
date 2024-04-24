import PropTypes from 'prop-types';

/**
 * Represents a form field component with label, input, and validation.
 * @const {Function} FormField - Functional component for rendering a form field.
 * @param {Object} props - The props object containing properties for the form field.
 * @param {string} props.label - The label text for the form field.
 * @param {string} props.type - The type of input field (e.g., text, email, password).
 * @param {string} props.name - The name attribute of the input field.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {string} [props.pattern] - The pattern attribute for input validation.
 * @param {boolean} [props.required] - Indicates if the input is required.
 * @param {number} [props.minLength] - The minimum length allowed for input.
 * @param {number} [props.maxLength] - The maximum length allowed for input.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChange - The function to handle input change.
 * @returns {JSX.Element} - JSX element representing the form field.
 */
const FormField = ({
  label,
  type,
  name,
  placeholder,
  pattern,
  required,
  minLength,
  maxLength,
  value,
  onChange,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        className='input'
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
