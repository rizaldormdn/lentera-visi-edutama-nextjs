import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import About from "@/organism/About";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <About />
    </BlankTemplate>
  );
}

export default about;