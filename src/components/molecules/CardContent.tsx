import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../atoms/Button";
import ProductCard from "../atoms/ProductCard";

const ContentCards = () => {

     return (
          <div className=' flex flex-col justify-center'>
               <div className='text-center mt-10'>
                    <h1 className='text-cyan-700 font-bold text-4xl'>Layanan Kami</h1>
                    <p className='mt-5'>Kenali diri dan bangun kepercayaan diri mu bersama kami</p>
               </div>
               <div className='mx-auto'>
                    <div>
                         <Swiper
                              spaceBetween={30}
                              slidesPerView={4}
                              freeMode={true}
                              grabCursor={true}
                              className='mySwiper'
                              modules={[FreeMode]}
                         >
                              <SwiperSlide>
                                   <ProductCard />
                              </SwiperSlide>
                         </Swiper>
                    </div>
                    <div className='mt-14 mb-20'>
                         <Button action={() => { }} title='Lihat selengkapnya' style="py-3 px-10 text-white flex items-center rounded-3xl font-semibold bg-cyan-700 hover:bg-cyan-800" />
                    </div>
               </div>
          </div>
     )
}

export default ContentCards