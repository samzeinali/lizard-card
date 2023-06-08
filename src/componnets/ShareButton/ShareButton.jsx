import './shareButton.css'
function ShareButton({ shareLink }) {
    return (
        <a href={shareLink} className="card__share-ancherText">SHARE</a>
    )
}

export default ShareButton;