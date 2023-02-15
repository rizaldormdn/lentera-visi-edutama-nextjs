import { CommonSEO } from "@/components/SEO"
import BlankTemplate from "@/components/templates/BlankTemplate"
import Contact from "@/organism/Contact"

function contact() {
     return (
          <BlankTemplate>
               <CommonSEO title='Contact' description='this is contact page' />
               <Contact />
          </BlankTemplate>
     )
}

export default contact