import React from 'react'

const SectionMember = () => {
    return (
        <div className='border-y border-2 my-10 shadow-md'>
            <section className='py-20 flex justify-between items-center max-w-3xl mx-auto'>
                {/* left */}
                <div className='max-w-[330px] space-y-3'>
                    <h3 className='text-[#195A32] text-2xl font-bold'>Jadi Member Dan Dapatkan Peluang Investasi Tanpa Riba</h3>
                    <div className='flex justify-between items-center'>
                        <p className='text-[#195A32] font-medium'>#TumbuhTanpaRiba</p>
                        <button className='bg-[#F5A856] text-white py-1 px-2 rounded font-semibold'>Ayo Mulai</button>
                    </div>
                </div>

                {/* right */}
                <div>
                    <img src="/img/stats.png" alt="" />
                </div>
            </section>
        </div>
    )
}

export default SectionMember
