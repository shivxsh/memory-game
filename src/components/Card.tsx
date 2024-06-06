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
            <img src={card.img} width={60} alt={card.name} />
        </div>

    )
}

export default Card
