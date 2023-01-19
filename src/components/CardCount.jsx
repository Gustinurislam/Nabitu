import Countdown from 'react-countdown'
import { FaChevronCircleRight, FaInfoCircle } from 'react-icons/fa'

const CardCount = () => {
    return (
        <section className='w-72 border bg-white mt-0 rounded-2xl shadow-xl relative'>
            <img src="/img/img1.png" alt="" className='w-full object-contain' />
            <div className='bg-[#195A32]/50 w-72 h-48 absolute top-0 rounded-t-2xl'>
                <div className='p-2 bg-white rounded-md mx-5 my-16'>
                    <div className='text-center  '>
                        <p className='font-medium text-green-600'>Akan Di Mulai</p>
                        <p className='font-bold text-green-500'>
                        <Countdown date={Date.now() + 1680000} />,
                        </p>
                    </div>
                </div>
                <img src="/img/logosm.png" alt="logo-sm" className='absolute bottom-5 right-28' />
            </div>
            <div className='p-4 space-y-2'>
                <div className='flex items-center'>
                    <p className='font-medium text-sm pr-2'>SYIRKAH MUDHOROBAH </p>
                    <FaInfoCircle />
                </div>
                <h3 className='font-bold text-[#195A32] tracking-wider'>AMK-02 Retail Lebaran Chino 2000 pcs</h3>
                <p className='text-sm'>Ammar Kids</p>
                {/* bar */}
                <div className='bg-white w-full rounded-full bar'>
                    <div className='p-2 rounded-full w-1/2' />
                </div>
                <div className='space-y-2'>
                    {/* left */}
                    <div className='flex justify-between'>
                        <div>
                            <p>Kebutuhan</p>
                            <p className='text-green-700'>Rp. 298.000.000</p>
                        </div>

                        <div className='text-right'>
                            <p>Terkumpul</p>
                            <p className='text-green-700'>Rp. 298.000.000</p>
                        </div>
                    </div>

                    {/* right */}
                    <div className='flex justify-between'>
                        <div className='space-y-2'>
                            <p>Periode</p>
                            <p>Durasi</p>
                            <p>Proyeksi</p>
                        </div>

                        <div className='space-y-2 text-right font-medium'>
                            <p>Dec 2021 - May 2022</p>
                            <p>4.9 Bulan</p>
                            <p>ROI 10.00%</p>
                        </div>
                    </div>

                    <div className='flex justify-end cursor-pointer'>
                        <div className='flex items-center justify-center border bg-[#195A32] p-1 w-28 rounded-md'>
                            <button className='text-white text-base mr-2'>Lihat</button>
                            <FaChevronCircleRight color='white' size='15px' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CardCount
