import Button from "../atoms/Button"
import ProductCard from "../atoms/ProductCard"

const ContentCards = () => {

     return (
          <div className=' flex flex-col justify-center'>
               <div className='text-center mt-10'>
                    <h1 className='text-cyan-700 font-bold text-4xl'>Layanan Kami</h1>
                    <p className='mt-5'>Kenali diri dan bangun kepercayaan diri mu bersama kami</p>
               </div>
               <div className='flex flex-col justify-center items-center'>
                    <ProductCard />
                    <div className='mt-14 mb-20'>
                         <Button action={() => { }} title='Lihat selengkapnya' style="py-3 px-10 text-white flex items-center rounded-3xl font-semibold bg-cyan-700 hover:bg-cyan-800" />
                    </div>
               </div>
          </div>
     )
}

export default ContentCards