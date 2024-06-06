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
        <div className='flex justify-center items-center h-full w-full'>
            {card.name === "cover" ? (
                <img src={card.img} alt={card.name} className="h-full w-full" />
            ) : (
                <img src={card.img} alt={card.name} width={60} />
            )}
        </div>

    )
}

export default Card
