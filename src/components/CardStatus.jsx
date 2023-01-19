import { FaArrowAltCircleRight } from 'react-icons/fa'
import productStats from '../../data/productStats.json'

const CardStatus = () => {
    return (
        <>
            {productStats.map(({ image, status }) => (
                <div className='w-72 border bg-white mt-0 rounded-2xl shadow-xl relative'>
                    <div className='flex flex-col'>
                        <img src={image} alt="" className='w-full object-contain' />
                        <div className='bg-[#195A32]/80 w-72 h-48 absolute top-0 rounded-t-2xl'>
                            <div className='rounded-md mx-10 my-10'>
                                <img src={status} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <p className='font-medium text-sm'>SYIRKAH MUDHOROBAH !</p>
                        <h3 className='font-bold text-[#195A32] tracking-wider'>AMK-02 Retail Lebaran Chino 2000 pcs</h3>
                        <p className='text-sm'>Ammar Kids</p>
                        {/* bar */}
                        <div className='bg-white w-full rounded-full bar'>
                            <div className='bg-green-800 rounded-full'><p className='text-[10px] text-center text-white'>100%</p></div>
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
                                    <FaArrowAltCircleRight color='white' size='15px' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardStatus
