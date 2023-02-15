import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Link from "next/link";

const index = () => {
	return (
		<BlankTemplate>
			<CommonSEO title="Blogs" description="This is where blogs belongs" />
			<ul className="flex flex-col">
				<Link className="hover:text-violet-500" href="/blogs/article">Go to /blogs/article</Link>
				<Link className="hover:text-violet-500" href="/blogs/breaking-news">Go to /blogs/breaking-news</Link>
				<Link className="hover:text-violet-500" href="/blogs/hot-news">Go to /blogs/hot-news</Link>
			</ul>
		</BlankTemplate>
	);
};

export default index;
