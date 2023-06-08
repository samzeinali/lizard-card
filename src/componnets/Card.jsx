import CardDescription from "./Carddescription/Carddescription";
import CardImage from "./Cardimage/Cardimage";
import CardTitle from "./Cardtitle/Cardtitle";
import LearnMoreButton from "./LeranMoreButton/LearnMoreButton";
import ShareButton from "./ShareButton/ShareButton";
import './cardStyle.css';



function Card(props) {
    console.log(props);
    return (
        <div className='card'>
            <div className='card__image'>
                <CardImage imageSRC={props.imageSRC} imageALT={props.imageALT} />
            </div>
            <div className='card__title'>
                <CardTitle titleText={props.titleText} />
            </div>
            <div className='card__description'>
                <CardDescription textDescription={props.textDescription} />
            </div>
            <div className='card__callToaction'>
                <div className='card__share'>
                    <ShareButton shareLink={props.shareLink} />
                </div>
                <div className='card__learnMore'>
                    <LearnMoreButton pageURL={props.pageURL} />
                </div>
            </div>
        </div>
    )
}

export default Card;