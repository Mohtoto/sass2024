import React from 'react'
import { Box } from './Box'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export const HeaderBlock = () => {
  return (
    <Box className='col-span-12 row-span-2 md:col-span-6'>

        <img src={'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Leo'}  alt='avatar' width={30} height={30} className='mb-4 size-12 rounded-full'/>
          <h1 className='mb-12 text-4xl font-medium leading-tight'>
              Hi, I am Mohammad.{" "}
              <span className='text-zinc-400'>
                I build cool stuff like this one.
              </span>

              <a href="" className='flex items-center gap-1 mt-12 text-red-300 hover:underline'>

                  Contact me <FiArrowRight />
                
              </a>
          </h1>
    </Box>
  )
}
