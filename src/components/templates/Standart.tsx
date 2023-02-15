import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/Navigation";

type props = {
	children: React.ReactNode;
};

const BlankTemplate = ({ children }: props) => {
	return (
		<div className="min-h-screen">
			<PrimaryNavigation />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default BlankTemplate;
