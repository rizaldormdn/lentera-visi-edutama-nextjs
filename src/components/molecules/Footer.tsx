import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/icon/logo.png';
import MediaSosial from "./MediaSosial";

const Footer = () => {
	const productLink = [
		{ label: 'Features', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'Case Studies', href: '#' },
		{ label: 'Reviews', href: '#' },
		{ label: 'Updates', href: '#' },
	]
	const companyLink = [
		{ label: 'About', href: '#' },
		{ label: 'Contact Us', href: '#' },
		{ label: 'Careers', href: '#' },
		{ label: 'Culture', href: '#' },
		{ label: 'Blog', href: '#' },
	]
	return (
		<footer>
			<div className="flex justify-between lg:justify-between items-center max-w-7xl mx-auto px-3 md:justify-evenly">
				<div className="w-[50%]">
					<Image src={logo} height={40} width={40} alt='' className="md:w-[60px] md:h-[60px] mt-6" />
					<p className="mt-4">Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Debitis,
						officiis atque sequi excepturi, <br /> iure hic molestias!
					</p>
					<div className="mt-6">
						<MediaSosial style="bg-gray-100 mr-3 P-1 rounded text-cyan-700 cursor-pointer" />
					</div>
				</div>
				<div className="mb-4">
					<h2 className="font-bold text-cyan-700">Product</h2>
					<div className="flex flex-col mt-6">
						{productLink.map(link => (
							<Link key={link.label} className="hover:text-cyan-700" href={link.href}>{link.label}</Link>
						))}
					</div>
				</div>
				<div className="mb-4">
					<h2 className="font-bold" style={{ color: '#2478A0' }}>Company</h2>
					<div className="flex flex-col mt-6">
						{companyLink.map(link => (
							<Link key={link.label} className="hover:text-cyan-700" href={link.href}>{link.label}</Link>
						))}
					</div>
				</div>
			</div>
			<div className="h-[1px] w-[90%] md:w-[80%]  mx-auto bg-black mt-10"></div>
			<div className="text-center p-2">
				<span>Copyright &copy; 2023 by <a href="htpps://saltacademy.id">Salt Academy</a></span>
			</div>
		</footer>
	);
};

export default Footer;
