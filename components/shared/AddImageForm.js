import { Field, Form, reduxForm } from 'redux-form';
import { SmallButton, FileInputField } from '../elements';

const AddImageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <div className='form-container'>
                    <Field 
                        name='photos' 
                        label='Галерея' 
                        component={FileInputField} 
                        multiple={true} 
                    />
                </div>
                <div className='button-wrapper'>
                    <SmallButton name='Зберегти зміни' width="100%" type='submit' />
                </div>
            </Form>
        </div>
    );
}

export default reduxForm({
    form: 'add-image-form',
    enableReinitialize: true,
    updateUnregisteredFields: true
})(AddImageForm);