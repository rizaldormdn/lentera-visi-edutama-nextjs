import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <h1>About Page</h1>
      <p>This is about page</p>
    </BlankTemplate>
  );
}

export default about;