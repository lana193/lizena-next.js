import React from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.div`
  text-align: left;
  span {
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    padding: 0 5px;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;

  .sc-AxhUy yxHEJ {
    background-color: white;
  }
`;

export const TextAreaField = ({ input, label, placeholder, type, meta: { touched, error, warning }}) => {
  return (
    <TextAreaWrapper>
      <label>{label}</label>
      <div>
        <StyledTextArea {...input} placeholder={placeholder} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </TextAreaWrapper>
  )
}
