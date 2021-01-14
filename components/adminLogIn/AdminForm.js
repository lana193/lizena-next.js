import { Field, Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { SmallButton, InputField } from '../elements';
const AdminContainer = styled.div`
    padding-top: 150px;
    padding-bottom: 150px;

    .form-container {
        border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    }

    .button-wrapper {
        margin: 0 auto;
        width: 80%;
    }  
   
`;

const AdminForm = (props) => {
    const { handleSubmit, selectedUser } = props;

    return (
        <AdminContainer>
            <Form onSubmit={handleSubmit}>
                <div className='form-container'>
                        <Field
                            name='email'
                            component={InputField}
                            type='text'
                            placeholder='Ваш email'
                            label='Email'
                        />
                    <div>
                        <Field
                            name='password'
                            component={InputField}
                            type='password'
                            placeholder='Ваш пароль'
                            label='Пароль'
                        />
                    </div>

                </div>
                <div className='button-wrapper'>
                    <SmallButton name='Увійти як адміністратор' type='submit'>
                        Увійти як адміністратор
                    </SmallButton> 
                </div>  
            </Form>
        </AdminContainer>
    );
}

export default  reduxForm({
    form: 'admin-form' // a unique identifier for this form
  })(AdminForm);