import { useState } from 'react'
import Image from 'next/image'
import header from '../../assets/images/header.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductCard = () => {
     const [active, setActive] = useState(0)
     const datas = [
          {
               title: 'content 1',
               image: header
          }, {
               title: 'content 2',
               image: header
          }, {
               title: 'content 3',
               image: header
          }, {
               title: 'content 4',
               image: header
          }, {
               title: 'content 5',
               image: header
          },
          {
               title: 'content 6',
               image: header
          },
     ]
     const limit = 1
     const handlePrev = () => {
          if (active > 0) {
               setActive(active - limit)
          }
     }
     const handleNext = () => {
          if (active < datas.length - limit) {
               setActive(active + limit)
          }
     }
     return (
          <>
               <div className='flex items-center justify-center mt-20 gap-8 overflow-x-auto'>
                    <ArrowBackIosNewIcon className='text-cyan-700 cursor-pointer' onClick={handlePrev} />
                    {datas.slice(active, active + limit).map((data, index) => {
                         const isActive = active === index
                         return (
                              <div className={`w-[263px] shadow-lg border rounded-2xl ${isActive ? '' : 'hiden'}`} key={index} >
                                   <Image src={data.image} width={263} height={220} alt='' className='rounded-t-2xl  ' />
                                   <h1 className='p-2 text-cyan-700'>{data.title}</h1>
                              </div>
                         )
                    })}
                    <ArrowForwardIosIcon className='text-cyan-700 cursor-pointer' onClick={handleNext} />
               </div>
          </>
     )
}
export default ProductCard