import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex justify-center  items-center  h-screen'>
       <div  className=" w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </Link>
    </form>
    <h3 className="font-bold text-lg">Sign up</h3>
    <div className='mt-4'>
    <span>Name</span>
    <br/>
    <input type='name' placeholder='Enter Your name' className='w-80 border-rounded px-3 border mt-2 outline-none'{...register("name", { required: true })} ></input>
    <br />
          {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
   
   </div>
   <div className='mt-4'>
    <span>Email</span>
    <br/>
    <input type='email' placeholder='Enter Your Email' className='w-80 border-rounded px-3 border mt-2 outline-none' {...register("email", { required: true })}></input>
    <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    
   </div>
   <div className='mt-4 mb-3'>
    <span>Password</span>
    <br/>
    <input type='password' placeholder='Enter Your Password' className='w-80 border-rounded px-3 border mt-2 outline-none' {...register("password", { required: true })}></input>
    <br />
          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='flex justify-around mt-3'>
   <button className="rounded-md px-3 py-1 hover:bg-pink-700 bg-pink-500 text-white " onClick={handleSubmit(onSubmit)}>Sign up</button>
   <p>Have Account?<button  className='underline text-blue-400 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
   <Login/>
   </p>
   

   </div>
  </div>
</div>
    </div>
   
  )
}

export default Signup