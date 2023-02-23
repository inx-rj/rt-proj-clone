// for handle validation errors from comming server side
const handleErrors = (backendErrors, setErrors) => {
    const errors = {};
    for (const key in backendErrors) {
        errors[key] = backendErrors[key][0]; // for now only take the first error of the array
    }
    setErrors(errors);
};

export { handleErrors };