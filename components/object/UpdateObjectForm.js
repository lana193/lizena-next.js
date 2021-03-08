import { useState } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { InputField, TextAreaField, SmallButton, FileInputField, AddInput } from '../elements';
import { DeleteIcon } from '../../src/icons/Icons';

import styled from 'styled-components';

const StyledTagsWrapper = styled.div`
    padding: 0px 0px 20px 12px;

    .tag-container {
        display: flex;
        align-items: flex-end;
    }

    span {
        border-radius: 15%;
    }

`;

const UpdateObjectForm = (props) => {
    const { handleSubmit, initialvalues, tags, setTags } = props;
    console.log('TAGS', tags);
    const [tag, setTag] = useState('');

    const handleTagChange = (e) => {
        setTag(e.target.value);
    }

    const handleAddClick = () => {
        if (tag) {
            setTags([...tags, tag])
            setTag('');
        }
    }

    const handleRemoveTag = (tagName) => {
        const filteredTags = tags.filter(item => item !== tagName);
        setTags(filteredTags);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} initialValues={initialvalues} >
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
                        type='text'
                        placeholder="Опис об'єкту"
                        label="Опис об'єкту"
                    />

                    <AddInput
                        name='work'
                        type='text'
                        placeholder='Робота'
                        label='Додати роботу'
                        onChange={handleTagChange}
                        handleAddClick={handleAddClick}
                        value={tag}
                    />
                    <StyledTagsWrapper> Список робіт:
                        {tags.map((item, index) => {
                        return (
                            <div className='tag-container' key={index} >
                                <span> - {item}</span>
                                <DeleteIcon small={true} onClick={() => handleRemoveTag(item)} />
                            </div>
                        );
                    })}
                    </StyledTagsWrapper>

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
                    <SmallButton name='Зберегти зміни' width='50%' margin='5px 25% 5px 25%' type='submit' />
                </div>
            </Form>
        </div>
    );
}

export default reduxForm({
    form: 'edit-object-form',
    enableReinitialize: true,
    updateUnregisteredFields: true,
    keepDirtyOnReinitialize: true
})(UpdateObjectForm);