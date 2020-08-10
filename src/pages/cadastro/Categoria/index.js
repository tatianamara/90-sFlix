import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categorysRepository from '../../../repositories/categorys';
import FormList from '../../../components/FormList';


function CategoryRegistration() {
    const history = useHistory();
    const intialValues = {
        title: '',
        description: '',
        color: '#000000',
    }

    const { handleChange, values, clearForm } = useForm(intialValues);

    const [categorys, setCategory] = useState([]);

    useEffect(() => {
        categorysRepository
            .getAll()
            .then((categorysFromServer) => {
                setCategory(categorysFromServer);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Category Registration: {values.name}</h1>

            <form onSubmit={function handleSubmit(eventInfo) {
                eventInfo.preventDefault();
                setCategory([
                    ...categorys,
                    values
                ]);

                categorysRepository.create({
                    title: values.name,
                    description: values.description,
                    color: values.color                 
                })
                    .then(() => {
                        alert('Category successfully registered!');
                        history.push('/cadastro/categoria');                        
                    });

                clearForm();
            }}>
                <FormField
                    label="Category Name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField
                    label="Description"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />


                <Button>
                    Register
                </Button>
            </form>

            {categorys.length === 0 && (
                <div>
                    Loading...
                </div>
            )}
            <FormList values={categorys}/>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default CategoryRegistration;