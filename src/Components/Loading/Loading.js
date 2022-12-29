import React from 'react';

const Loading = () => {
   return (
      <div className='h-screen w-full  flex items-center justify-center absolute top-20 left-0 z-10 '>
         <div className=' flex items-center justify-center  w-20 h-20 border-[10px] border-b-sky-500  border-t-sky-400 border-secondary animate-spin rounded-full' >
            <p className='text-[9px] font-bold  text-secondary animate-pulse '>loading</p>
         </div>
      </div>
   );
};

export default Loading;