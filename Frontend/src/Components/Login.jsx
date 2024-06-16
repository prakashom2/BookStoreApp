import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </Link>
      </form>
    <h3 className="font-bold text-lg">Login</h3>
   <div className='mt-4'>
    <span>Email</span>
    <br/>
    <input type='email' placeholder='Enter Your Email' className='w-80 border-rounded px-3 border mt-2 outline-none' 
     {...register("email", { required: true })}></input>
     <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

   </div>
   <div className='mt-10 mb-3'>
    <span>Password</span>
    <br/>
    <input type='password' placeholder='Enter Your Password' className='w-80 border-rounded px-3 border mt-2 outline-none' 
    {...register("password", { required: true })}></input>
    <br />
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

   </div>
   <div className='flex justify-around mt-3'>
   <button className="rounded-md px-3 py-1 hover:bg-pink-700 bg-pink-500 text-white" onClick={handleSubmit(onSubmit)}>Login</button>
    <p>Not Registered?<Link to="/signup" className='underline text-blue-500 cursor-pointer'>Sign in</Link></p>
   </div>
   
  </div>
  
</dialog>
    </div>
  )
}

export default Login