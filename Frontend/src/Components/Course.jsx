import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import {Link} from 'react-router-dom'


function Course() {
  return (
    <>
    <div className='min-h-screen max-w-screen-2xl containetr mx-auto md:px-20 px-4'>
    <div className='justify-center text-center mt-28 '>
        <h1 className=' text-2xl md:text-4xl '>We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ad nisi ipsum laboriosam placeat quo deserunt amet accusamus et perspiciatis neque at, ullam eius! Libero enim accusantium doloribus totam consequuntur eveniet deleniti possimus accusamus ad, minima quam, eligendi tenetur omnis?</p>
<Link to="/"> 
<button className="btn bg-pink-400 hover:bg-pink-500 mt-8 text-white">Back</button>

</Link>
    </div>
    <div className=' mt-4 grid grid-cols-1 md:grid-cols-4 '>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} />
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course;