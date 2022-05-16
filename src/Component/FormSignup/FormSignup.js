import React from 'react'
import useForm from '../../useForm'

const FormSignup = () => {
    const {handleChange, values} = useForm
  return (
    <div className='Form-content__right'>
        <form className='form'>
            <h1>
                Get started with us today ! Create your account
                by filling out the information below.
            </h1>
            <div className='form__inputs'>
                <label htmlFor='email' className='form__label'>
                Your email address
                </label><br/>
                <input 
                    id='email'
                    type="email"
                     name='email'
                     placeholder='Enter your email address'
                     className='form__input'
                     value={values.email}
                     onChange={handleChange}
                         />
                
            </div>
            <div className='form__inputs'>
                <label htmlFor='password' className='form__label'>
                   Your password

                </label><br/>
                <input
                     id='password' 
                     type="password"
                     name='password '
                     placeholder='Enter your password'
                     className='form__input'
                     value={values.password}
                     onChange={handleChange}
                     />
            </div>
            <div className='form__inputs'>
                <label htmlFor='password' className='form__label'>
                    Cofirm your password

                </label><br/>
                <input 
                     id='password2' 
                     type="password"
                     name='password2 '
                     placeholder='Enter your password'
                     className='form__input'
                     value={values.password2}
                     onChange={handleChange}
                     />
            </div>
            <div className='form__inputs'>
                <label htmlFor='username' className='form__label'>
                    Your full name

                </label><br/>
                <input
                    id='username'
                     type="text"
                     name='username'
                     placeholder='Enter your full name'
                     className='form__input'
                     value={values.username}
                     onChange={handleChange}
                     />
            </div>
            <div className='form__inputs'>
                <label htmlFor='username' className='form__label'>
                    Your phone number

                </label><br/>
                <input
                    id='phonenumber'
                    type="number"
                     name='phonenumber'
                     placeholder='phone number'
                     className='form__input'
                     value={values.phonenumber}
                     onChange={handleChange}
                     />
                     
            </div>
            <input type="checkbox" name="terms" id="terms" onchange="activateButton(this)"/> 
             I need and Agree Terms & Coditions
             <br/>
           
            <button className='form-input__btn' type='submit'> Create account </button>
            
        </form>
    </div>
  )
}

export default FormSignup