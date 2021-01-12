import { Field, Form, reduxForm } from 'redux-form';
import { InputField, TextAreaField, SmallButton, FileInputField } from '../elements';

const UpdateProjectForm = (props) => {
    const { handleSubmit, selectedProject }  = props;
    return (
        <div>
            <Form 
                onSubmit={handleSubmit}
                initialValues={{
                    project_name: selectedProject.project_name,
                    description: selectedProject.description,
                    for_sale: selectedProject.for_sale,
                    main_image: selectedProject.main_image,
                    photos: selectedProject.photos
                }}
                >
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
                    <SmallButton name='Зберегти зміни' type='submit' />
                </div>
            </Form>
        </div>
    );
}

export default reduxForm({
    form: 'edit-project-form',
    enableReinitialize: true,
    updateUnregisteredFields: true,
    // keepDirtyOnReinitialize: true
})(UpdateProjectForm);
