import Image from 'next/image'
import React from 'react'
import Rectangle228 from '../../assets/images/Rectangle 228.png'

const ArticleCard = () => {
     const dataArticle = [
          {
               title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
               image: Rectangle228,
               content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae cum fuga velit alias libero quibusdam labore',
               createdAt: '30 january 2010',
          },
          {
               title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
               image: Rectangle228,
               content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae cum fuga velit alias libero quibusdam labore',
               createdAt: '30 january 2010',
          },
          {
               title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
               image: Rectangle228,
               content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae cum fuga velit alias libero quibusdam labore',
               createdAt: '30 january 2010',
          }
     ]
     return (
          <>
               {dataArticle.map((data: any) => (
                    <div key={data.title} className='w-[300px] md:w-[350px] shadow-2xl rounded-xl cursor-pointer py-4'>
                         <Image src={Rectangle228} width={300} height={300} alt='' className='rounded-t-xl md:w-[350px]' />
                         <h1 className='p-2'>{data.title}</h1>
                         <p className='p-2'>{data.content}</p>
                         <p className='text-xs p-2'>{data.createdAt}</p>
                    </div>
               ))
               }
          </>
     )
}
export default ArticleCard