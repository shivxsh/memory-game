import '../index.css'

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
        <div className='flex justify-center items-center h-full w-full rotate-180 '>
            {card.name === "cover" ? (
                <img src={card.img} alt={card.name} className="h-full w-full rounded-lg" />
            ) : (
                <img src={card.img} alt={card.name} className='w-16 md:w-20' />
            )}
        </div>

    )
}

export default Card
