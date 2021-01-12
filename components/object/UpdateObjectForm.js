import { Field, Form, reduxForm } from 'redux-form';
import { InputField, TextAreaField, SmallButton, FileInputField } from '../elements';

const UpdateObjectForm = (props) => {
    const { handleSubmit, initialValues } = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} initialValues={initialValues} >
                <div className='form-container'>
                    <Field
                        name='object_name'
                        component={InputField}
                        type='text'
                        placeholder="Назва об'єкту"
                        label="Назва об'єкту"
                    />

                    <Field
                        name='subtitle'
                        component={InputField}
                        type='text'
                        placeholder='Короткий опис (двохповерховий котедж)'
                        label='Короткий опис'
                    />

                    <Field
                        name='description'
                        component={TextAreaField}
                        type='textarea'
                        placeholder="Опис об'єкту"
                        label="Опис об'єкту"
                    />

                    <Field
                        name='conclusion'
                        component={TextAreaField}
                        type='textarea'
                        placeholder='Підсумок'
                        label='Підсумок'
                    />

                    <Field
                        name='metres'
                        component={InputField}
                        type='number'
                        placeholder='Площа (лише цифра)'
                        label='Площа'
                    />
                    <Field
                        name='rooms'
                        component={InputField}
                        type='number'
                        placeholder='Кількість кімнат (лише цифра)'
                        label='Кількість кімнат'
                    />

                    <Field
                        name='bathrooms'
                        component={InputField}
                        type='number'
                        placeholder='Кількість санвузлів (лише цифра)'
                        label='Кількість санвузлів'
                    />

                    <Field
                        name='price'
                        component={InputField}
                        type='number'
                        placeholder='Ціна (в доларах, лише цифра)'
                        label='Ціна'
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
    form: 'edit-object-form',
    enableReinitialize: true,
    updateUnregisteredFields: true
})(UpdateObjectForm);