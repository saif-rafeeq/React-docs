import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion'

const Card = ({ data , refrence}) => {
  // console.log(data)
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceStiffness:100, bounceDamping:30}}  className='w-60 relative text-white px-5 py-8 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-8 font-medium'>{data.desc}</p>
      <div className="footer absolute w-full bottom-0  left-0  ">
        <div className='flex items-center justify-between  mb-3 px-5 py-2'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full items-center flex justify-center'>
            {data.close ? <IoCloseOutline /> : <GoDownload size='.9rem' color='#ffff' />}
          </span>
        </div>
        {
          data.tag.isopen && <div className={`w-full py-2  ${data.tag.tagcolor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
          </div>
        }

      </div>


    </motion.div>
  )
}

export default Card