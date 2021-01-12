import React from 'react';
import styled from 'styled-components';

const StyledRadioLabel = styled.label`
  display: inline-block;
  
`;

const StyledInputRadio = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  .sc-AxhUy yxHEJ {
    background-color: white;
  }
`;

export const RadioFormField = ({ input, label, placeholder, value, meta: { touched, error } }) => {
  return (
      <StyledRadioLabel>
        <StyledInputRadio {...input} placeholder={placeholder} type='radio' value={value} />
        {touched && error && <span>{error}</span>}
        {label}
    </StyledRadioLabel>
  )
}