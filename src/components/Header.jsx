import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='p-3 shadow-lg flex justify-around items-center w-full relative sm:static'>
            {/* left */}
            <div>
                <img src="/img/logo.png" alt="logo" className='w-[195px]' />
            </div>
            {/* right */}
            <div className='flex items-center sm:space-x-6 font-medium'>
                <div className={`items-center flex sm:top-0 top-20 sm:right-0 sm:py-0 right-5 py-3 absolute sm:static space-x-1 lg:space-x-6 font-medium whitespace-nowrap ${open ? 'right-0 opacity-100' : '-left-[490px]'}`}>
                    <h2 className="btn-hamburger">Investasi</h2>
                    <h2 className="btn-hamburger">Pendanaan</h2>
                    <h2 className="btn-hamburger">Tentang Kami</h2>
                    <h2 className="btn-hamburger">Edukasi</h2>
                    <h2 className="btn-hamburger">ID</h2>
                </div>
                <div onClick={() => setOpen(!open)} className='bg-[#53825E] p-2 rounded mr-2 inline sm:hidden cursor-pointer text-white'>
                    {open ? (<FaTimes />) : (<FaBars />)}
                </div>
                <button className='border border-[#53825E] py-1 px-2 rounded-md text-[#53825E]'>Masuk</button>
            </div>
        </header>
    )
}

export default Header
