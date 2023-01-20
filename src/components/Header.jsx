import { FaBars } from "react-icons/fa"

const Header = () => {
    return (
        <header className='p-3 shadow-lg flex justify-around items-center w-full'>
            {/* left */}
            <div>
                <img src="/img/logo.png" alt="logo" className='w-[195px]' />
            </div>
            {/* right */}
            <div className='flex items-center sm:space-x-6 font-medium'>
                <div className="items-center hidden sm:inline-flex sm:space-x-6 font-medium">
                    <h2 className="cursor-pointer">Investasi</h2>
                    <h2 className="cursor-pointer">Pendanaan</h2>
                    <h2 className="cursor-pointer">Tentang Kami</h2>
                    <h2 className="cursor-pointer">Edukasi</h2>
                    <h2 className="cursor-pointer">ID</h2>
                </div>
                <div className='bg-[#53825E] p-2 rounded mr-2 inline sm:hidden cursor-pointer'>
                    <FaBars color='white' />
                </div>
                <button className='border border-[#53825E] py-1 px-2 rounded-md text-[#53825E]'>Masuk</button>
            </div>
        </header>
    )
}

export default Header
