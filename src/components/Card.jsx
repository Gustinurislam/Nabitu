import products from '../../data/products.json'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Card = () => {
    return (
        <>
            {products.map(({image}) => (
                <section className='w-72 border bg-white mt-0 rounded-2xl shadow-xl relative'>
                    <img src={image} alt="" className='w-full object-contain' />
                    <div className='p-4 space-y-2'>
                        <p className='font-medium text-sm'>SYIRKAH MUDHOROBAH !</p>
                        <h3 className='font-bold text-[#195A32] tracking-wider'>AMK-02 Retail Lebaran Chino 2000 pcs</h3>
                        <p className='text-sm'>Ammar Kids</p>
                        {/* bar */}
                        <div className='bg-white w-full rounded-full bar'>
                            <div className='bg-green-800 p-2 rounded-l-full w-[75%]' />
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

                </section>
            ))}

        </>
    )
}

export default Card
