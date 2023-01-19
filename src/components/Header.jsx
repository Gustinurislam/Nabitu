import React from 'react'

const Header = () => {
    return (
        <header className='p-3 shadow-lg flex justify-around items-center'>
            {/* left */}
            <div>
                <img src="/img/logo.png" alt="logo" className='' />
            </div>
            {/* right */}
            <div className='flex items-center space-x-6 font-medium'>
                <h2>Investasi</h2>
                <h2>Pendanaan</h2>
                <h2>Tentang Kami</h2>
                <h2>Edukasi</h2>
                <h2>ID</h2>
                <button className='border border-[#53825E] py-1 px-2 rounded-md text-[#53825E]'>Masuk</button>
            </div>
        </header>
    )
}

export default Header
