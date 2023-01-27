import Link from "next/link";
import Button from "../atoms/Button";

const PrimaryNavigation = () => {
	const userData = {
		name: "Jane Doe",
		email: "envkt@example.com",
		password: "password",
		role: "admin",
	};

	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-xl tracking-tight">Logo</span>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
				<ul className="lg:flex-grow">
					<Link className="hyperlink" href="/">Home</Link>
					<Link className="hyperlink" href="/about">About</Link>
					<Link className="hyperlink" href="/blogs">Blog</Link>
				</ul>
				<div>
					<Button action={(e) => {alert('Triggered')}} title="Login"/>
				</div>
			</div>
		</nav>
	);
};

export default PrimaryNavigation;
