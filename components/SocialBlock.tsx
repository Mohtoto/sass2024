import React from 'react'
import { Box } from './Box'
import { SiGithub, SiLinkedin, SiTiktok, SiYoutube } from 'react-icons/si'
import { motion}  from 'framer-motion'

export const SocialBlock = () => {
  return (
   <>
    <Box whileHover={{ rotate : "2.5deg" ,scale:1.1 }} className="col-span-6 bg-red-500 md:col-span-3">
        <a href="" className='grid h-full place-content-center text-3xl text-white'>

          <SiYoutube />
        </a>
    </Box>


    <Box whileHover={{ rotate : "2.5deg" ,scale:1.1 }} className="col-span-6 bg-green-500 md:col-span-3">
        <a href="" className='grid h-full place-content-center text-3xl text-white'>

          <SiGithub />
        </a>
    </Box>

    <Box whileHover={{ rotate : "-2.5deg" ,scale:1.1 }} className="col-span-6 bg-blue-500 md:col-span-3">
        <a href="" className='grid h-full place-content-center text-3xl text-white'>

          <SiLinkedin />
        </a>
    </Box>

    <Box whileHover={{ rotate : "-2.5deg" ,scale:1.1 }} className="col-span-6 bg-zinc-50 md:col-span-3">
        <a href="" className='grid h-full place-content-center text-3xl text-black'>

          <SiTiktok />
        </a>
    </Box>


   </>
  )
}
