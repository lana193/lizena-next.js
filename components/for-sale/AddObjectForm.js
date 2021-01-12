import { Field, Form, reduxForm } from 'redux-form';
import { InputField, TextAreaField, SmallButton, FileInputField } from '../elements';

const AddObjectForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='form-container'>
                    <Field
                        name='object_name'
                        component={InputField}
                        type='text'
                        placeholder="Назва об'єкту"
                    />
                    <Field
                        name='subtitle'
                        component={InputField}
                        type='text'
                        placeholder='Короткий опис (двохповерховий котедж)'
                    />

                    <Field
                        name='description'
                        component={TextAreaField}
                        type='textarea'
                        placeholder="Опис об'єкту"
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
                    />
                    <Field
                        name='rooms'
                        component={InputField}
                        type='number'
                        placeholder='Кількість кімнат (лише цифра)'
                    />

                    <Field
                        name='bathrooms'
                        component={InputField}
                        type='number'
                        placeholder='Кількість санвузлів (лише цифра)'
                    />

                    <Field
                        name='price'
                        component={InputField}
                        type='number'
                        placeholder='Ціна (в доларах, лише цифра)'
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
                    <SmallButton name='Створити проєкт' type='submit' />
                </div>
            </Form>
        </div>
    );
}
export default reduxForm({
    form: 'add-object-form'
})(AddObjectForm);