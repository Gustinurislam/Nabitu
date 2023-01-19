import React from 'react'
import Card from './Card'
import CardCount from './CardCount'
import CardStatus from './CardStatus'

const Cards = () => {
    return (
        <div>
            {/* Maaf jika ini bukan Best Practice, tapi ini usaha saya untuk menampilkan UI yg sama dengan yang di figma */}
            <div className='flex gap-5'>
                <div className='grid grid-cols-2 gap-5'>
                    <CardCount />
                    <CardStatus />
                </div>
                <div className='space-y-5'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Cards
