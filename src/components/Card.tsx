import React from 'react'

interface Card {
    id: number,
    name: string,
    img: string
}

interface Props {
    card: Card
}


const Card = ({ card }: Props) => {
    return (
        <div className='w-20 h-20 border-3 border-black flex justify-center items-center cursor-pointer bg-amber-200 rounded-xl'>
            <img src={card.img} width={50} alt={card.name} />
        </div>

    )
}

export default Card
