import { CommonSEO } from "@/components/SEO"
import BlankTemplate from "@/components/templates/BlankTemplate"
import Image from "next/image"
import Rectangle229 from '../../assets/images/Rectangle 229.png'
import Rectangle228 from '../../assets/images/Rectangle 228.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MediaSosial from "@/components/molecules/MediaSosial"
import ArticleCard from "@/components/atoms/ArticleCard"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Article = () => {
     return (
          <BlankTemplate>
               <CommonSEO title='Article' description='this is Article page' />
               <div className="p-4 md:max-w-7xl md:mx-auto mb-20">
                    <div className="flex gap-3 text-sm">
                         <div className="flex gap-2 items-center text-cyan-700">
                              <p className="text-xs md:text-base">Pusat Edukasi</p>
                              <ArrowForwardIosIcon className="text-sm" />
                         </div>
                         <div className="flex items-center gap-2 text-cyan-700">
                              <p className="text-xs md:text-base">Article Ilmiah</p>
                              <ArrowForwardIosIcon className="text-sm" />
                         </div>
                         <div>
                              <p className="text-xs md:text-base">ini adalah title article</p>
                         </div>
                    </div>
                    <div className="mb-6 mt-6">
                         <h1 className="text-3xl md:text-4xl">ini adalah title article</h1>
                         <div className="flex items-center mt-2 text-xs">
                              <CalendarMonthIcon />
                              <p className="px-2">31 january 2030</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-center">
                         <Image src={Rectangle229} width={1300} height={600} alt='' className="mb-6" />
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi praesentium commodi nesciunt asperiores aperiam voluptatem. Cum eveniet,</p>
                         <Image src={Rectangle228} width={250} height={300} alt='' className="mt-6 mb-6 md:w-[500px]" />
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi praesentium commodi nesciunt asperiores aperiam voluptatem. Cum eveniet,</p>
                    </div>
                    <div className="h-[1px] w-[100%] md:w-[80%] mx-auto bg-gray-400  mt-10"></div>
                    <div className="mt-4 flex items-center">
                         <h3 className="mr-2">Bagikan</h3>
                         <MediaSosial style="text-md px-1 mr-2 text-white bg-gray-500 rounded-full" />
                    </div>
                    <div className="mt-10 md:flex md:flex-wrap gap-10">
                         <h2 className="font-bold py-3 text-3xl text-start w-full">Lihat Juga</h2>
                         <ArticleCard />
                    </div>
               </div>
          </BlankTemplate>
     )
}
export default Article