import { useState } from 'react'

function useForm(intialValues) {
    const [values, setValues] = useState(intialValues); 

    
    function setValue(key, valor) {
        setValues({
            ...values,
            [key]: valor,
        })
    }

    function handleChange(eventInfo) {
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value
        );
    }

    function clearForm() {
        setValues(intialValues)
    }

    return {
        values,
        handleChange,
        clearForm,
    };
}

export default useForm;