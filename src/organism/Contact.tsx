import FormContact from '@/components/molecules/FormContact'
import MediaSosial from '@/components/molecules/MediaSosial'
import Image from 'next/image'
import { useState } from 'react'
import photo from '../assets/images/photo.jpg'


const Contact = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
     })
     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setFormData({ ...formData, [e.target.name]: e.target.value })
     }
     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          console.log(formData);
     }
     return (
          <>
               <div className='flex items-center flex-wrap justify-evenly md:mt-10'>
                    <div>
                         <Image src={photo} width={675} height={1104} alt='' />
                    </div>
                    <div className='px-10 mt-10'>
                         <h1 className=' font-bold text-5xl text-cyan-700'>Get in touch today</h1>
                         <p className='text-gray-300 mt-5 ml-3'>keep in touch with us!</p>
                         <div className='mt-10'>
                              <FormContact
                                   formData={formData}
                                   handleChange={handleChange}
                                   handleSubmit={handleSubmit}
                              />
                         </div>
                    </div>
               </div>
               <div className='text-center mt-16 mb-32 '>
                    <h1 className='text-cyan-700 font-bold text-4xl'>Our Social Media</h1>
                    <div className="mt-10 text-center ml-8">
                         <MediaSosial style='bg-gray-100 mr-8 text-3xl rounded text-cyan-700 cursor-pointer' />
                    </div>
               </div>
          </>
     )
}

export default Contact
