import React from 'react'
import { useAuth } from './context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useAuth();
    const handelLogout =()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
                       })
                       localStorage.removeItem("Users")
                       toast.success("Logout Sucessfully")
                        
                       setTimeout(()=>{
        
                        window.location.reload();
                       
                        },2000)
                        
                       
        }catch(error){
            toast.error("Error: " +error.message)
            setTimeout(()=>{},2000)
        }
    }
  return (
    <div>
        <button className='px-3 py-2 rounded-md text-white bg-red-500 cursor-pointer'
        onClick={handelLogout}
        >Logout</button>
    </div>
  )
}
 

export default Logout