import React from 'react';
import styled from 'styled-components';

const FileInputWrapper = styled.div`
    .input-field {
        margin-bottom: 10px;
        
        input {
            padding: 5px;
        }
    }
`;

export const FileInputField = (props) => {
    const onChange = (e) =>  {
        const { input: { onChange } } = props;
        let fileArray = Array.from(e.target.files);
        onChange(fileArray); 
    }

    // const { input: { value } } = props;
    const { label, multiple, name } = props;
    
    return (
        <FileInputWrapper>
            <label>{label}</label>
            <div className='input-field'>
                <input
                    type='file'
                    name={name}
                    accept='.jpg, .png, .jpeg'
                    onChange={onChange}
                    multiple={multiple}
                />
            </div>
        </FileInputWrapper>
    );
}
