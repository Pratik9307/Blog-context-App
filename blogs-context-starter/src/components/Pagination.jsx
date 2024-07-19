import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

 const Pagination = () => {
  const{page,handlePageChange,}=useContext(AppContext)
  return (
    <div className='w-full h-[50px] flex justify-center items-center bg-white border border-x-20 shadow-lg '>
      <div className='flex justify-around gap-40'> {  page >  1 &&
           (<button onClick={()=>handlePageChange(page-1)}>
            Previous
           </button>)
      }
      { 
       (  page < 6 &&
        <button className='w[20px] h-[15px] border-7 rounded-md' onClick={()=>handlePageChange(page+1)}>
          Next
        </button>
       ) 
      }
      <p className='text-black font-bold'>
        Page {page} of {6} 
      </p>
      
      </div>
    </div>
  )
}
export default Pagination;
