/* eslint-disable react/prop-types */
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot, faCalendarDays, faXmark } from '@fortawesome/free-solid-svg-icons';
import PersonalForm from './PersonalForm'; 
import { LazyLoadImage } from "react-lazy-load-image-component";

function Modal({rentDetails, onClose, onConfirmation}) {

    function dismiss() {
        onClose();
    }
    
    return (
        <div className="modal-overlay">
            <div className='modal'>
                <header className='modalHeader'>
                    Complete Reservation
                    <span onClick={() => dismiss()}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></span>
                </header>
                <div className="rentDetails">
                    <p>
                        <span className="info">
                            <FontAwesomeIcon icon={faInfo} style={{color:'#ffffff',}} /> 
                        </span><span className="headings">Upon completing this reservation enquiry, you will receive:</span>
                    </p>
                    <p>
                        Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number
                    </p>
                </div>

                <div className="pickUpDetails">
                    <div className="pickUpDetails-left">
                        <p className='headings'>Location and Date</p>
                        <div>
                            <p className='out'>
                                <FontAwesomeIcon icon={faLocationDot} className='icon'/>Pick-Up Date 
                            </p>
                            <p className='in'>
                                {rentDetails.pickUpDate}
                            </p>
                        </div>
                        <div>
                            <p className='out'>
                                <FontAwesomeIcon icon={faLocationDot} className='icon'/>Drop-Off Date
                            </p>
                            <p className='in'>
                                {rentDetails.dropOffDate}
                            </p>
                        </div>
                        <div>
                            <p className='out'>
                                <FontAwesomeIcon icon={faCalendarDays} className='icon'/>Pick-Up Location
                            </p>
                            <p className='in'>
                                {rentDetails.pickUpLoc}
                            </p>
                        </div>
                        <div>
                            <p className='out'>
                                <FontAwesomeIcon icon={faCalendarDays} className='icon'/>Drop-Off Location
                            </p>
                            <p className='in'>
                                {rentDetails.dropOffLoc}
                            </p>
                        </div>
                    </div>
                    <div className="pickUpDetails-right">
                        <p> <strong>Bike:</strong> <span className='headings'>{rentDetails.bikeType}</span></p>
                       <LazyLoadImage src="/flights/bmw.png" alt="" className='pickUpImg'/>
                    </div>

                </div>

                <div className='separator'>h</div>

                <PersonalForm onConfirmation={onConfirmation} onClose = {onClose}/>
            </div>
        </div>
    )
}

export default Modal;