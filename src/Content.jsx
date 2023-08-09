import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
import { LazyLoadImage } from "react-lazy-load-image-component";

function Content() {
    return (
       
        <div className="allContent">
            <div className="content">
                <h2>Plan your trip now</h2>
                <h1 className='headLine'>Save <span className='highlight'>big</span> with our bike rental</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className="content-btn-group">
                    <button className='ride'>Book Ride <FontAwesomeIcon icon={faCheck} /></button>
                    <button className='more'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" /></button>
                </div>
            
            </div>
            <LazyLoadImage src="/flights/mainBike.png"
                alt="Image Alt"
                className='mainBike'
            />
        </div>
       
    )
}

export default Content;