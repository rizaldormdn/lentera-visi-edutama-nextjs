import Image from 'next/image';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import header from '../../assets/images/header.png';

import 'swiper/css';
import 'swiper/css/free-mode';

const ProductCard = () => {

     return (
          <>
               <div>
                    <Swiper
                         spaceBetween={100}
                         slidesPerView={4}
                         freeMode={true}
                         grabCursor={true}
                         modules={[FreeMode]}
                    >
                         <SwiperSlide>
                              <div className=''>
                                   <Image src={header} width={500} height={500} alt='image-product' className='border rounded-t-xl' />
                                   <h1>content</h1>
                              </div>
                         </SwiperSlide>
                    </Swiper>
               </div>
          </>
     )
}
export default ProductCard