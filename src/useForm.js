import {userState , useEffect} from 'react'

const useForm = () => {
    const [values, setValues] = userState({
        email:"",
        password:"",
        password2:"",
        username:"",
        phonenumber:""
    })
    const [errors, setErrors] = userState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
  return (
    {
        handleChange, values
    }
  )
}

export default useForm