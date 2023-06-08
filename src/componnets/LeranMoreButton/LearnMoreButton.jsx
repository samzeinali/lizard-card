import './learnMore.css'
function LearnMoreButton({ pageURL }) {
    return (
        <div>
            <a href={pageURL} className="card__learnMore-ancherText">LEARN MORE</a>
        </div>
    )
}
export default LearnMoreButton;