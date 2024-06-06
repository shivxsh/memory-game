import { useState } from 'react'
import Card from './Card';

const GridCards = () => {

    const [cards, setCards] = useState([
        { id: 0, name: "spiderman", img: '/assets/spiderman.png' },
        { id: 0, name: "spiderman", img: '/assets/spiderman.png' },
        { id: 1, name: "antman", img: '/assets/ant-man.png' },
        { id: 1, name: "antman", img: '/assets/ant-man.png' },
        { id: 2, name: "batman", img: '/assets/batman.png' },
        { id: 2, name: "batman", img: '/assets/batman.png' },
        { id: 3, name: "captain-america", img: '/assets/captain-america.png' },
        { id: 3, name: "captain-america", img: '/assets/captain-america.png' },
        { id: 4, name: "wolverine", img: '/assets/wolverine.png' },
        { id: 4, name: "wolverine", img: '/assets/wolverine.png' },
        { id: 5, name: "ironman", img: '/assets/iron-man.png' },
        { id: 5, name: "ironman", img: '/assets/iron-man.png' },
    ].sort(() => Math.random() - 0.5));

    return (
        <div className="grid place-items-center">
            <div className='h-96 w-96 grid grid-cols-3 gap-3 place-items-center mb-4'>
                {cards.map((card, index) => {
                    return <Card key={index} card={card} />
                })}
            </div>
        </div>
    )
}

export default GridCards
