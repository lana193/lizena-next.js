import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { InputField, TextAreaField, SmallButton } from './../elements';
import { required } from '../../src/utils/inputValidation';
import PhoneInputField from './PhoneInputField';
import MessageSendedModal from './MessageSendedModal';

const ContactForm = (props) => {
    const { handleSubmit, submitSucceeded, closeContactModal }  = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <div className='form-container'>
                    <Field
                        name='user_name'
                        component={InputField}
                        type='text'
                        placeholder="Ваше ім'я"
                        validate={required}
                    />
                    <Field
                        name='user_email'
                        component={InputField}
                        type='email'
                        placeholder='Ваш email'
                        validate={required}
                    />
                    <Field
                        name='phone_number'
                        component={PhoneInputField}
                        placeholder='Ваш номер телефону'
                        validate={required}
                    />
                    <Field
                        name='text'
                        component={TextAreaField}
                        type='textarea'
                        placeholder='Текст повідомлення'
                        validate={required}
                    />
                </div>
                <div className='button-wrapper'>
                    <SmallButton name='Надіслати' type='submit'  />
                </div>
                {
                    submitSucceeded && <MessageSendedModal showModal={submitSucceeded} closeContactModal={closeContactModal? closeContactModal : false}/>
                }
            </Form>
        </div>
    );
}

export default reduxForm({
    form: 'contact-form'
})(ContactForm);
