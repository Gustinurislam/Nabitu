const SectionMember = () => {
    return (
        <div className='border-y border-2 my-14 shadow-md'>
            <section className='py-20 flex justify-between items-center max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto'>
                {/* left */}
                <div className='max-w-none sm:max-w-[330px] space-y-1 sm:space-y-3'>
                    <h3 className='text-[#195A32] text-lg sm:text-2xl font-bold'>Jadi Member Dan Dapatkan Peluang Investasi Tanpa Riba</h3>
                    <div className='inline-block space-y-1 sm:space-y-0 sm:flex justify-between items-center'>
                        <p className='text-[#195A32] text-xs sm:text-base font-medium'>#TumbuhTanpaRiba</p>
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
