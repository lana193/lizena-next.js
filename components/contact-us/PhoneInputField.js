import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';

const PhoneInputWrapper = styled.div`
  text-align: left;
  padding: 8px 0;
  .react-tel-input{
    margin-bottom: 8px;
  }
  span {
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    padding: 8px 5px;
    margin-top: 8px !important;
  }
`;
 
const PhoneInputField = ({ input, placeholder, name, meta: { touched, error, warning }}) =>  {
  return (
    <PhoneInputWrapper>
      <PhoneInput
        {...input}
        name={name}
        country={'ua'}
        placeholder={placeholder}
        inputStyle={{ width: '100%' , height: '41px', marginBottom: '8px !important' }}
      />
      {touched && ((error && <span className='error'>{error}</span>) || (warning && <span className='warning'>{warning}</span>))}
    </PhoneInputWrapper>
    
  )
}

export default PhoneInputField;