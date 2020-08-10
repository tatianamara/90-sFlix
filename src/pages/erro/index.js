import React from 'react';
import NazereImg from '../../assets/img/nazareconfusa.jpg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

function page404() {
    return (
        <PageDefault>
            <div>
                <h1>404 - WE COULDN'T FIND THIS PAGE</h1>
            </div>
            <div>
                <img src={NazereImg} alt="404"></img>
            </div>
            <Button as={Link} to="/">
                Home
            </Button>
        </PageDefault>
    );
}

export default page404;