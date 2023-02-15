import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Home from "@/organism/Home";

const index = () => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by Russ" />
			<Home />
		</BlankTemplate>
	);
};

export default index;
