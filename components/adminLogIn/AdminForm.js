import { Field, Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { SmallButton, InputField } from '../elements';
const AdminContainer = styled.div`
    padding: 5em 0;
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 767.98px) {
        padding: 2em 0;
    }

    .form-container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        width: 100%;
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