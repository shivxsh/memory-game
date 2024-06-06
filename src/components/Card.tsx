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
        <div>
            <img src={card.img} alt={card.name} />
        </div>
    )
}

export default Card
