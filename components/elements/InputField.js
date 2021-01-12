import styled from 'styled-components';

const InputFieldWrapper = styled.div`
  text-align: left;
  span {
    color: red;
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    padding: 0 5px;
  }
`;

const StyledInput = styled.input`
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

  .iNGPih {
    opacity: 0.5;
    font-size: 15px;
  }

  .irIqTD {
    min-height: 100px;
  }

  .sc-fzoLsD bTNiIn span {
    color: red;
  }
`;

export const InputField = ({ input, label, placeholder, type, meta: { touched, error, warning }}) => {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <div>
        <StyledInput {...input} placeholder={placeholder} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </InputFieldWrapper>
  )
}
