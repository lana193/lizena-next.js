import styled from 'styled-components';
import { AddIcon } from '../../src/icons/Icons';

const InputFieldContainer = styled.div`
  text-align: left;

  .input-wrapper {
    display: flex;
    width: 100%;
    // align-items: flex-end;
    // padding: 12px 20px;
    margin: 8px 0;
  }

  span {
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    padding: 0 5px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

//   .sc-AxhUy yxHEJ {
//     background-color: white;
//   }

//   .iNGPih {
//     opacity: 0.5;
//     font-size: 15px;
//   }

//   .irIqTD {
//     min-height: 100px;
//   }

//   .sc-fzoLsD bTNiIn span {
//     color: red;
//   }
`;

export const AddInput = ({ name, value, handleAddClick, label, placeholder, type, id, onChange }) => {
  return (
    <InputFieldContainer>
      <label>{label}</label>
      <div className='input-wrapper'>
        <StyledInput name={name} placeholder={placeholder} type={type}  id={id} onChange={onChange} value={value}/>
        <AddIcon onClick={handleAddClick} />
        {/* {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} */}
      </div>
    </InputFieldContainer>
  )
}
