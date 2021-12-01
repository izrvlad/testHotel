import * as Yup from "yup";


export const validationSchemaOfLoginForm = {
    validationSchema:Yup.object({
        login:Yup.string().required("Поле должно быть заполнено").email("Введите корректный email"),
        password:Yup.string().min(8,"Минимальная длина пароля 8 символов").matches(/^[a-zA-Z0-9]+$/,"Не используйте кирилические символы")
    }),
    initialValues:{
        login:"",
        password:""
    }
}
export const validationSchemaOfSearchForm = {
    validationSchema:Yup.object({
        town:Yup.string().required("Поле должно быть заполненно"),
        date:Yup.date().required("Поле должно быть заполненно").min(new Date().toDateString(),"Дата не может быть ранее сегодня"),
        days:Yup.number().integer("Введите целое число").min(1,"Число должно быть положительным")
    }),
    initialValues: {
        town:"Москва",
        date:new Date().toISOString().split('T')[0],
        days:1
    }
}
