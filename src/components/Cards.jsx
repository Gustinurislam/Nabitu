import Card from './Card'
import CardCount from './CardCount'
import CardStatus from './CardStatus'

const Cards = () => {
    return (
        <div>
            {/* Maaf jika ini bukan Best Practice, tapi ini usaha saya untuk menampilkan UI yg sama dengan yang di figma */}
            <div className='inline lg:flex sm:gap-5'>
                <div className='grid ml-8 lg:ml-0 grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-5'>
                    <CardCount />
                    <CardStatus />
                </div>
                <div className='ml-8 lg:ml-0 my-5 lg:my-0 sm:space-x-0 md:space-x-10 lg:space-x-0 space-y-5 md:space-y-0 lg:space-y-5 md:flex lg:inline'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Cards
