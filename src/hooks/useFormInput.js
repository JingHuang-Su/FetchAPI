import React from 'react';

export const useFormInput = ({ name, ...args }) => {
  const [value, setValue] = React.useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    const isInvalid = /[^0-9]/.test(value);
    const isInvalidRange = num =>
      num.length > 0 && (Number(num) > 36 || Number(num) === 0);
    if (isInvalid || isInvalidRange(value)) {
      e.preventDefault();
      return;
    }
    setValue(value);
  };

  return { name, onChange: handleInputChange, value, type: 'text', ...args };
};

export default useFormInput;
