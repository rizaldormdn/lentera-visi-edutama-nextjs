import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from "next/link";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const MobileMenu = () => {
  return (
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
  );
}
const MobileNavigation = () => {

  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <div>
        <DehazeIcon fontSize='large' className='md:hidden' onClick={() => { setMenu(!menu) }} />
      </div>
      {menu && (
        <div className='absolute top-[3.5rem] left-[0] bg-white w-full rounded-b-xl'>
          <ul className="p-1">
            <Link className="block hover:text-cyan-700 p-3" href="/">Home</Link>
            <div >
              <div className="flex items-center p-2">
                <Link className='block hover:text-cyan-700' href=''>Resources</Link>
                <KeyboardArrowDownIcon onClick={() => { setOpen(!open) }} className="mt-0.5 hover:text-cyan-700 cursor-pointer" />
              </div>
              {open && (
                <ul className="absolute px-1 w-full rounded-xl bg-white">
                  <Link className="block p-1 hover:text-cyan-700" href='/about' >About</Link>
                  <Link className="block p-1 hover:text-cyan-700" href='/about' >About</Link>
                  <Link className="block p-1 hover:text-cyan-700" href='/about' >About</Link>
                </ul>
              )}
            </div>
            <Link className="block hover:text-cyan-700 p-3" href="/blogs">Blog</Link>
            <Link className="block hover:text-cyan-700 p-3" href="/contact">Contact</Link>
          </ul>
        </div>
      )}
    </div>
  )
}
export { MobileMenu, MobileNavigation };