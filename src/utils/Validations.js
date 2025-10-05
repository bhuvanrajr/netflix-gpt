export const Validations = (email, password) =>{
const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if(!emailValidator)
        return "Email ID is not valid!";
    
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!passwordValidator)
        return "Password is weak!";

    return null;
}