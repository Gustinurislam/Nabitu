import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'

const GreenBox = () => {
    return (
        <div className='relative bg-[#195A32]'>
            <img src="/img/leafdown.png" alt="" className='absolute' />
            <img src="/img/leafup.png" alt="" className='absolute bottom-0 right-0' />
            <div className='grid grid-cols-4 gap-5 bg-[#195A32] text-white py-10 px-48 space-x-10' >
                <div>
                    <h4 className='font-semibold mb-5'>PT. Nabitu Teknologi Islami</h4>
                    <p>
                        Jalan Uranus Blok CIII No. 11
                        Komp. Margahayu Raya Barat
                        Buah Batu, Bandung 40286
                    </p>
                </div>
                <div>
                    <h4 className='font-semibold mb-5'>Informasi Layanan</h4>
                    <p>Daftarkan Proyek Investasi</p>
                    <p>Ikut Investasi</p>
                    <p>Akad - akad Investasi</p>
                    <p>Workflow Investasi</p>
                    <p>Ketentuan Pengguna</p>
                </div>
                <div>
                    <h4 className='font-semibold mb-5'>Tentang Kami</h4>
                    <p>Tentang Nabitu</p>
                    <p>Latar Belakang Nabitu</p>
                    <p>Our Vision and Values</p>
                    <p>Partners</p>
                    <p>Portofolio</p>
                </div>
                <div>
                    <h4 className='font-semibold mb-5'>Kontak</h4>
                    <p>admin@nabitu.id</p>
                    <p>+62 882 1111 2275</p>
                </div>
            </div>
            {/* bottom */}
            <div className='grid grid-cols-4 gap-5 bg-[#195A32] text-white py-10 px-48 space-x-10' >
                <div>
                    <h4 className='font-semibold mb-2'>Sosial Media</h4>
                    <div className='grid ml-6 gap-y-2'>
                        <div className='flex gap-2'>
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                        <div className='flex gap-2'>
                            <FaLinkedin />
                            <FaTiktok />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className='font-semibold mb-2'>Dalam Proses</h4>
                    <img src="/img/ojk.png" alt="" className='w-[121px]' />
                </div>

                <div className='space-y-5'>
                    <h4 className='font-semibold'>Terdaftar di : </h4>
                    <img src="/img/kominfo.png" alt="" className='w-[164px]' />
                    <img src="/img/afsi.png" alt="" className='w-[219px]' />
                </div>

                <div className='space-y-5'>
                    <h4 className='font-semibold'>Didukung Oleh :</h4>
                    <div className='ml-5'>
                        <img src="/img/privy.png" alt="" className='w-[78px]' />
                        <img src="/img/bsi.png" alt="" className='w-[83px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreenBox
