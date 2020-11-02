export const required = value => {
    if (value) return undefined;
    return "Поле, обязательное для заполнения";
}
export const selectRequired = value => {
    if (value) return undefined
    return "Выберите один из них";
}

export const emailRequired = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Invalid email address";
    else if (!value) return "Поле, обязательное для заполнения"
}

export const phoneRequired = value => {
    if (value && !/^(0|[1-9][0-9]{5,15})$/i.test(value)) return "Invalid phone number, must be 10 digits";
    return undefined;
}

// export const match = (matchName) => (value, allValues) => {
//     return value !== allValues[matchName]? `This field must match with ${matchName} field`:undefined;
// }

// export const confirmPass = value => {
//     debugger;
//     if (value.password !== value.re_password) {
//         return "Hello"
//     }
// }

export const maxLengthCreator = (maxLen) => (value) => {
    if (value.length > maxLen) return `Max length is ${maxLen} symbols`
    return undefined;   
}


