import { FaBars, FaPlay, FaSistrix } from 'react-icons/fa'
import Cards from './Cards'

const Main = () => {
    return (
        <main className='mt-10 max-w-[350px] sm:max-w-2xl lg:max-w-4xl mx-auto'>
            <div className='space-y-10'>
                <div>
                    <h1 className='text-3xl font-semibold text-center text-[#195A32]'>Daftar Proyek</h1>
                    <p className='font-base text-gray-400 text-center'>Temukan proyek untuk didanai !</p>
                </div>

                {/* select & search  */}
                <div className='flex justify-between'>
                    <div className='space-x-1 sm:space-x-6 flex text-gray-500'>
                        <div className='flex items-center relative'>
                            <select className='w-20 sm:w-40 lg:w-48 border border-gray-500 p-1 rounded focus:outline-none'>
                                <option>Status</option>
                            </select>
                            <FaPlay className='rotate-90 absolute right-2' />
                        </div>

                        <div className='flex items-center relative'>
                            <select className='w-32 sm:w-40 lg:w-48 border border-gray-500 p-1 rounded focus:outline-none'>
                                <option>Bidang Usaha</option>
                            </select>
                            <FaPlay className='rotate-90 absolute right-2' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-1 sm:space-x-4'>
                        <div className='bg-[#53825E] p-2 rounded'>
                            <FaBars color='white' />
                        </div>
                        <div className='py-1 px-2 border border-gray-500 rounded flex items-center'>
                            <input type="text" className=' focus:outline-none px-2 w-14 sm:w-full' placeholder='Cari' />
                            <FaSistrix />
                        </div>
                    </div>
                </div>

                {/* cards  */}
                <Cards />
            </div>
        </main>
    )
}

export default Main
