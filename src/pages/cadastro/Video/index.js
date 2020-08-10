import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categorysRepository from '../../../repositories/categorys';
import videosRepository from '../../../repositories/videos';

function VideoRegistration() {
    const history = useHistory();
    const [categorys, setCategorias] = useState([]);
    const categoryTitles = categorys.map(({ title }) => title)

    const intialValues = {
        title: '',
        url: '',
        category: '',
    }

    const { handleChange, values } = useForm(intialValues);

    useEffect(() => {
        categorysRepository
            .getAll()
            .then((categorysFromServer) => {
                setCategorias(categorysFromServer);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Video Registration</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                const choosenCategory = categorys.find((category) => {
                    return category.title === values.category;
                });

                if (choosenCategory === undefined) {
                    alert(`É preciso cadastrar a categoria ${values.category} primeiro`);
                } else {

                    videosRepository.create({
                        categoryId: choosenCategory.id,
                        title: values.name,
                        url: values.url,
                    })
                        .then(() => {
                            console.log('Video successfully registered!');
                            history.push('/');
                        });
                }
            }}>
                <FormField
                    label="Video Title"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <div>
                    <Button type="submit">
                        Register
                    </Button>
                    <Button as={Link} to="/cadastro/categoria" style={{ float: "right" }}>
                        Category registration
                    </Button>
                </div>
            </form>

            <br />
            <br />
        </PageDefault>
    );
}

export default VideoRegistration;