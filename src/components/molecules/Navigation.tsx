import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../assets/icon/logo.png';
import { MobileNavigation } from './MobileMenu';

const PrimaryNavigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="py-3 mx-auto flex justify-between items-center md:max-w-7xl bg-white">
            <div className="px-3">
                <Link href={'/'}>
                    <Image width={40} height={40} src={logo} alt='Logo'
                        className='md:w-[74px] md:h-[74px] '
                    />
                </Link>
            </div>
            <div className="px-3">
                <ul className="hidden md:flex md:items-center">
                    <Link className="block hover:text-cyan-700 p-3" href="/">Home</Link>
                    <div >
                        <div className="flex items-center p-2">
                            <Link className='block hover:text-cyan-700' href=''>Resources</Link>
                            <KeyboardArrowDownIcon onClick={() => { setOpen(!open) }} className="mt-0.5 hover:text-cyan-700 cursor-pointer" />
                        </div>
                        {open && (
                            <ul className="absolute w-[120px] p-2 rounded bg-white">
                                <Link className="block p-1 hover:text-cyan-700" href='/about' >About</Link>
                                <Link className="block p-1 hover:text-cyan-700" href='/about' >About</Link>
                                <Link className="block p-1 hover:text-cyan-700" href='/about' >About</Link>
                            </ul>
                        )}
                    </div>
                    <Link className="block hover:text-cyan-700 p-3" href="/blogs">Blog</Link>
                    <Link className="block hover:text-cyan-700 p-3" href="/contact">Contact</Link>
                </ul>
                {/* Mobile */}
                <MobileNavigation />
            </div >
        </nav >
    );
};

export default PrimaryNavigation;
