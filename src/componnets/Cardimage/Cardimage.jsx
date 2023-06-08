import './image.css'
function CardImage({ imageSRC, imageALT }) {
    return (
        <img src={imageSRC} alt={imageALT} className="card__image-img" />
    )
}

export default CardImage;