import React from 'react'

const Background = () => {
    return (
        <>
            <div className='w-full h-screen fixed z-[1]'>
                <div className=' text-2xl text-zinc-600 text-center py-4'>Documents</div>
                <h1 className='text-[11vw] text-zinc-900 w-fit absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-medium'>Docs.</h1>
            </div>
        </>
    )
}

export default Background