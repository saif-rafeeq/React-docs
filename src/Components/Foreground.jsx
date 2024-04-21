import React, { useRef, useState } from 'react'
import Card from './Card'



const Foreground = () => {
    const ref = useRef(null)
    const [data, setdata] = useState([
        {
            desc: "Contains sensitive information, access restricted to authorized personnel only.",
            filesize: ".9mb",
            close: false,
            tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" }
        },
        {
            desc: "Work in progress, subject to revisions and not finalized.",
            filesize: ".17mb",
            close: true,
            tag: { isopen: false, tagtitle: "Download Now", tagcolor: "green" }
        },
        {
            desc: "Classified information, access and dissemination subject to security protocols.",
            filesize: ".3mb",
            close: true,
            tag: { isopen: true, tagtitle: "Upload Now", tagcolor: "blue" }
        },
    ])
    return (
        <>
            <div ref={ref} className='w-full h-screen fixed z-[2] p-5 flex gap-10 flex-wrap'>
                {data.map((item,index)=>(
                    <Card data={item} key={index} refrence={ref} />
                ))}
            </div>
        </>
    )
}

export default Foreground