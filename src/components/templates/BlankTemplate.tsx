import { NextPage } from "next";
import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/Navigation";

type props = {
	children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<PrimaryNavigation />
			{children}
			<Footer />
		</div>
	)
};

export default BlankTemplate;
