import styled from './description.module.css';
function CardDescription({ textDescription }) {
    return (
        <p className={styled.text}>{textDescription}</p>
    )
}

export default CardDescription;