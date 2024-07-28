import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    
    const {data:session} = useSession()

  return (
    <div className='flex justify-between items-center py-4 text-black'>
      <div>
        <div className='text-3xl '>
        ToDo App
        </div>
        <div className='text-xs text-yellow-100' >
        <p>To delete a task, press the cross icon in front of it</p>
        </div>
      </div>
      <div className='cursor-pointer' onClick={()=>{signOut}}>
        <Image 
        className='rounded-full' 
        src={session?.user?.image!} 
        alt='img' 
        width={40} 
        height={40} />
      </div>
    </div>
  );
};

export default Navbar;
 