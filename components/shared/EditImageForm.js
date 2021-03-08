import { Field, Form, reduxForm } from 'redux-form';
import { SmallButton, FileInputField } from '../elements';

const EditImageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <div className='form-container'>
                    <Field 
                        name='photos' 
                        label='Фото для редагування' 
                        component={FileInputField} 
                        multiple={false} 
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
    form: 'edit-image-form',
    enableReinitialize: true,
    updateUnregisteredFields: true
})(EditImageForm);