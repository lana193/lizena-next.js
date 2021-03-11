import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { InputField, TextAreaField, SmallButton, FileInputField } from '../elements';

const AddProjectForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='form-container'>
                    <Field
                        name='project_name'
                        component={InputField}
                        type='text'
                        placeholder='Назва проєкту'
                        label='Назва проєкту'
                    />

                    <Field
                        name='description'
                        component={TextAreaField}
                        type='textarea'
                        placeholder='Опис проєкту'
                        label='Опис проєкту'
                    />

                    <Field
                        name='conclusion'
                        component={TextAreaField}
                        type='textarea'
                        placeholder='Підсумок'
                        label='Підсумок'
                    />

                    <Field 
                        name='main_image' 
                        label='Головне зображення' 
                        component={FileInputField} 
                        multiple={false}
                    />
                    <Field 
                        name='photos' 
                        label='Галерея' 
                        component={FileInputField} 
                        multiple={true} 
                    />
                </div>
                <div className='button-wrapper'>
                    <SmallButton name='Створити проєкт' width='100%' type='submit' />
                </div>
            </Form>
        </div>
    );
}
export default reduxForm({
    form: 'add-project-form',
    initialValues: { for_sale: false }
})(AddProjectForm);