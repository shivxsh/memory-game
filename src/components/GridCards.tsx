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
        { id: 6, name: "black-panther", img: '/assets/black-panther.png' },
        { id: 6, name: "black-panther", img: '/assets/black-panther.png' },
    ]);
    return (
        <div>
            {cards.map((card, index) => {
                return <Card card={card} />
            })}
        </div>
    )
}

export default GridCards
