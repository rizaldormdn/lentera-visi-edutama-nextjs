import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import Button from '../atoms/Button';

const Header = () => {
     const router = useRouter()
     return (
          <>
               <div className='flex items-center text-white justify-center h-[600px] bg-center bg-cover custom-img md:h-screen bg-fixed'>
                    <div className='absolute top-[14rem] p-2 md:top-[25rem]'>
                         <h1 className='text-4xl p-2 md:text-6xl lg:w-[50%]'>Bersama Lentera Visi Edutama</h1>
                         <p className='p-2 lg:w-[40%]'>Handal berkomunikasi mudah bersosialisasi miliki sikap profesional tampilkan keunikan diri
                              capai potensi diri-mu & jadilah versi terbaik diri mu</p>
                         <div className='flex items-center justify-center w-[200px] rounded-3xl py-2 mt-3 text-cyan-700 hover:text-white bg-white hover:bg-cyan-800'>
                              <Button action={() => { router.push('/about') }} title='Get Started' style='' />
                              <ArrowForwardIcon className='p-1 cursor-pointer' />
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Header