import React, { useEffect } from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import  { toast } from 'react-toastify'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if(error){
            toast.error(error.message)
        }
    }, [error])

    if(user){
        navigate(from,{replace:true})
    }
   
  
  return (
    <div className='flex h-screen justify-center items-center '>
    <div className='card w-96 bg-base-100 shadow-xl p-4'>
        <div className='card body p-4'>
            <p className='text-center font bold text-2xl'>Login</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required!"
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "The email is not valid"
                        }

                    })} />

                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.email.message}</span>}

                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 ' >{errors.email.message}</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your Password" className="input input-bordered w-full max-w-xs " {...register("password", {
                        required: {
                            value: true,
                            message: "Password not found!"
                        },
                        minLength: {
                            value: 6,
                            message: "The password must be 6 characters long"
                        }

                    })} />

                    {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.password.message}</span>}

                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 ' >{errors.password.message}</span>}
                </div>

              
                <input type="submit" value="Login" className='btn btn-primary  w-full max-w-xs my-5' />
            </form>
                    <p className='font-bold'>Don't have a account?<Link to="/register" className='text-primary font-medium'> Sign Up</Link> </p>
         
        </div>

    </div>
</div>
  )
}

export default Login