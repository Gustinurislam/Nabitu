import { FaBars, FaPlay, FaSistrix } from 'react-icons/fa'
import Cards from './Cards'

const Main = () => {
    return (
        <main className='mt-10 max-w-4xl mx-auto'>
            <div className='space-y-10'>
                <div>
                    <h1 className='text-3xl font-semibold text-center text-[#195A32]'>Daftar Proyek</h1>
                    <p className='font-base text-gray-400 text-center'>Temukan proyek untuk didanai !</p>
                </div>

                {/* title  */}
                <div className='flex justify-between'>
                    <div className='space-x-6 flex text-gray-500'>
                        <div className='flex items-center relative'>
                            <select className='w-48 border border-gray-500 p-2 rounded focus:outline-none'>
                                <option value="">Status</option>
                            </select>
                            <FaPlay className='rotate-90 absolute right-3' />
                        </div>

                        <div className='flex items-center relative'>
                            <select className='w-48 border border-gray-500 p-2 rounded focus:outline-none'>
                                <option value="">Bidang Usaha</option>
                            </select>
                            <FaPlay className='rotate-90 absolute right-3' />
                        </div>
                    </div>

                    {/* option & search */}
                    <div className='flex items-center space-x-4'>
                        <div className='bg-[#53825E] p-2 rounded'>
                            <FaBars color='white' />
                        </div>
                        <div className='py-1 px-2 border border-gray-500 rounded flex items-center'>
                            <input type="text" className=' focus:outline-none px-2' placeholder='Cari' />
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
