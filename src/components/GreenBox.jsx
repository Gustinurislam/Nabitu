import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'

const GreenBox = () => {
    return (
        <section>
            <div>
                <h4>PT. Nabitu Teknologi Islami</h4>
                <p>
                    Jalan Uranus Blok CIII No. 11
                    Komp. Margahayu Raya Barat
                    Buah Batu, Bandung 40286
                </p>
            </div>
            <div>
                <h4>Informasi Layanan</h4>
                <p>Daftarkan Proyek Investasi</p>
                <p>Ikut Investasi</p>
                <p>Akad - akad Investasi</p>
                <p>Workflow Investasi</p>
                <p>Ketentuan Pengguna</p>
            </div>
            <div>
                <h4>Tentang Kami</h4>
                <p>Tentang Nabitu</p>
                <p>Latar Belakang Nabitu</p>
                <p>Our Vision and Values</p>
                <p>Partners</p>
                <p>Portofolio</p>
            </div>
            <div>
                <h4>Kontak</h4>
                <p>admin@nabitu.id</p>
                <p>+62 882 1111 2275</p>
            </div>
            {/* bottom */}
            <div>
                <h4>Sosial Media</h4>
                <div>
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaTiktok />
                </div>
            </div>
            <div>
                <h4>Dalam Proses</h4>
                <img src="/img/ojk.png" alt="" />
            </div>
            <div>
                <h4>Terdaftar di : </h4>
                <img src="/img/kominfo.png" alt="" />
                <img src="/img/afsi.png" alt="" />
            </div>
            <div>
                <h4>Didukung Oleh :</h4>
                <img src="/img/privy.png" alt="" />
                <img src="/img/bsi.png" alt="" />
            </div>
        </section>
    )
}

export default GreenBox
