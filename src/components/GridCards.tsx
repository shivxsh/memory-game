import { useState } from 'react'
import Card from './Card';

const GridCards = () => {

    const [flipped, setFlipped] = useState<number[]>([]);

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

    const handleClick = (index: number) => {
        setFlipped([...flipped, index]);
    }

    return (
        <div className='flex felx-col justify-center items-center'>
            <div className="grid w-96 grid-cols-3 gap-0 place-items-center">
                {cards.map((card, index) => (
                    <div onClick={() => handleClick(index)} key={index} className='transform h-20 w-20 md:h-28 md:w-28 border-3 animate-[flipCard_0.5s_linear] border-black flex justify-center items-center cursor-pointer bg-amber-200 rounded-xl mb-4'>
                        {
                            flipped.includes(index) ?
                                (<Card card={card} />)
                                :
                                <Card card={{ id: 0, name: "cover", img: "/assets/cover.jpg" }} />

                        }

                    </div>
                ))}
            </div>
        </div>

    )
}

export default GridCards
