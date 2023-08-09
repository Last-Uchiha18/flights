import './testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
    return (
        <div className='testimonial' id="testimonials">
            <h2>Reviewed by People</h2>
            <h1 className='testHeading'>Client&apos;s Testimonials</h1>
            <p className='testContent'>Discover the positive impact we&apos;ve made on the our clients by reading through their testimonials. 
                Our clients have experienced our service and results, and they&apos;re eager to share their positive experiences with you.</p>
            <div className="cards">
                <div className="card">
                    <h3>
                        &quot;We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.&quot;
                    </h3>
                    
                    <div className="by">
                            <img src="/flights/hp.webp" alt="" />
                            <h4> Parry Hotter </h4>
                            <FontAwesomeIcon icon={faQuoteRight} style={{color: "#EF1C24",}} className='testIcon' />
                    </div>
                </div>
                <div className="card">
                    <h3>
                        &quot;The car was in great condition and made our trip even better. Highly recommend for this car rental website!&quot;
                    </h3>
                    <div className="by">
                            <img src="/flights/hp.webp" alt="" />
                            <h4> Gojo Satoru </h4>
                            <FontAwesomeIcon icon={faQuoteRight} style={{color: "#EF1C24",}} className='testIcon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;