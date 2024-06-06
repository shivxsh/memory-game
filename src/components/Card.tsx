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
        <div className='flex justify-center items-center h-full w-full rotate-180'>
            {card.name === "cover" ? (
                <img src={card.img} alt={card.name} className="h-full w-full rounded-lg hover:border-4 hover:border-white" />
            ) : card.name === "deadpool" ? (
                <img src={card.img} alt={card.name} className='w-20 md:w-24' />
            ) : (
                <img src={card.img} alt={card.name} className='w-16 md:w-20' />
            )}
        </div>

    )
}

export default Card
