import React from 'react';

const types = {
    email: {
       regex: /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i,
       message: "Preencha um e-mail válido."
    },
    password: {
        regex: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\]|\\:;"'<>,.?/_₹]).{8,16}$/,
        message: "A senha deve ter pelo menos 1 caracter minúsculo, 1 caracter maiúsculo, 1 número e 1 caracte especial."
    },
}

const useForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value){
        if(type === false) return true;
        if(value.length === 0) {
            setError('Preencha um valor.')
            return false;
        } else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true; 
        }
    }

    function onChange({target}){
        if(error) validate(target.value);
        setValue(target.value);
    }

  return {
    value, 
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
