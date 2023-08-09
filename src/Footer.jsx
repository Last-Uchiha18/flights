import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer' id='contact'>
            <div className="footer-section">
                <h1>
                    BIKE RENTAL
                </h1>
                <p>
                    We offers a big range of vehicles for all your driving
                     needs. We have the perfect car to meet your needs.
                </p>
                <div>
                    <div className="connect">
                    <FontAwesomeIcon icon={faPhone} /> <span> (123) -456-789 </span>
                    </div>
                    <div className="connect">
                        <FontAwesomeIcon icon={faEnvelope} /><span> bikerental@gmail.com </span>
                    </div>
                </div>
                
            </div>
            <div className="footer-section">
                <h1>COMPANY</h1>
                <p>New Delhi</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we work</p>
            </div>
            <div className="footer-section">
                <h1>WORKING HOURS</h1>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 19:00PM</p>
                <p>Sun: Closed</p>
            </div>
            <div className="footer-section">
                <h1>SUBSCRIPTION</h1>
                <p>Subscribe your Email address for latest news & updates.</p>
                <div>
                    <input type="email" placeholder='Enter Email Address'/>
                    <input type='Submit'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;