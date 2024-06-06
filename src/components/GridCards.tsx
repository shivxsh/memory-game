import { useEffect, useState } from 'react'
import Card from './Card';

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
].sort(() => Math.random() - 0.5);

const GridCards = () => {

    //array of size 2. Will contian the indices of the two images
    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number[]>([]);
    const [cards, setCards] = useState(cardsData);

    const handleClick = (index: number) => {

        //prevent multiple clicks on same card  + two clicks
        if (!flipped.includes(index) && flipped.length < 2) {
            setFlipped([...flipped, index]);
        }
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

    return (
        <div className='flex justify-center items-center'>
            <div className="grid w-96 md:w-[30rem] grid-cols-3 gap-0 place-items-center">
                {cards.map((card, index) => (
                    <div onClick={() => handleClick(index)} className='h-20 w-20 md:h-28 md:w-28 border-3 border-black flex justify-center items-center cursor-pointer bg-amber-200 rounded-xl mb-4'>
                        {
                            flipped.includes(index) || solved.includes(index) ?
                                <Card card={card} />
                                :
                                <Card card={{ id: -1, name: "cover", img: "/assets/cover.jpg" }} />
                        }

                    </div>
                ))}
            </div>
        </div>

    )
}

export default GridCards
