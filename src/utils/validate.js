export const isValidaData = (name,email, password) => {

    const isEmailIsValid =/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordIsValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameIsValid =/^[a-zA-Z\s]+$/.test(name);

    if(!isEmailIsValid) return "Email is not valid";
    if(!isPasswordIsValid) return "Password is not valid";
    // Only validate name if it's provided (not empty)
    if(name && !isNameIsValid) return "Name is not valid"

    return null;
};