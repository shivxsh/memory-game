import { useEffect, useState } from 'react'
import Card from './Card';

const generateCardGrid = () => {

    const cardsData = [
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
    ];

    const shuffledCardGrid = cardsData.sort(() => Math.random() - 0.5);
    return shuffledCardGrid;
}


const GridCards = () => {


    //array of size 2. Will contian the indices of the two images
    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number[]>([]);
    const [cards, setCards] = useState(generateCardGrid());

    const handleClick = (index: number) => {

        //prevent multiple clicks on same card  + two clicks
        if (!flipped.includes(index) && flipped.length < 2 && !solved.includes(index)) {
            setFlipped([...flipped, index]);
        }

        // console.log(solved);
    }

    useEffect(() => {
        const checkForMatch = () => {
            // const [firstIndex, secondIndex] = flipped;
            const firstIndex = flipped[0];
            const secondIndex = flipped[1];

            if (cards[firstIndex].id === cards[secondIndex].id) {
                setSolved([...solved, ...flipped]);
            }
            setFlipped([]);
        };

        if (flipped.length == 2) {
            setTimeout(() => {
                checkForMatch();
            }, 500);
        }

    }, [cards, flipped, solved])

    const victory = (solved.length === cards.length);

    const resetGame = () => {
        setCards(generateCardGrid());
        setSolved([]);
        setFlipped([]);
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            {victory && <h1 className='mb-4 text-amber-500 font-black text-2xl'>🥳You Won!🎉</h1>}
            <div className="grid w-96 md:w-[30rem] grid-cols-3 place-items-center mb-4">
                {cards.map((card, index) => (
                    <div onClick={() => handleClick(index)} key={index} className={`h-20 w-20 md:h-28 md:w-28 border-3 border-black flex justify-center items-center cursor-pointer bg-amber-200 rounded-lg mb-4 transition-transform duration-400 ${flipped.includes(index) || solved.includes(index) ? 'rotate-180' : ''}`}>
                        {
                            flipped.includes(index) || solved.includes(index) ?
                                <Card card={card} />
                                :
                                <Card card={{ id: -1, name: "cover", img: "/assets/cover.jpg" }} />
                        }
                    </div>
                ))}
            </div>
            <button onClick={resetGame} className="text-5xl rounded-md cursor-pointer hover:scale-105">
                🔄️
            </button>
        </div>

    )
}

export default GridCards
