import './booking.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMotorcycle, faCalendarDays, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from './Modal';

function Booking() {

    const [showModal, setShowModal] = useState(false)
    const [rentDetails, setRentDetails] = useState({})
    const [showError, setShowError] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const bikeType = formData.get('carType')
        const pickUpLoc =formData.get('pickUp')
        const dropOffLoc = formData.get('dropOff')
        const pickUpDate = formData.get('pickUpDate')
        const dropOffDate = formData.get('dropOffDate')

        if (bikeType == undefined | pickUpLoc == undefined | dropOffLoc == undefined | pickUpDate == undefined | dropOffDate == undefined) {
            setShowError(true)
        } else {
            setShowError(false)
            setRentDetails({bikeType, pickUpLoc, dropOffLoc, pickUpDate, dropOffDate})
            setShowModal(true)
        }
    }

    function onClose() {
        setShowModal(false)
    }

    return (
        <div className='booking'>
            <div className="booking-info">
                {showModal && <Modal rentDetails = {rentDetails} onClose={onClose} onConfirmation={setShowConfirmation}/>}
                <h1>Book a  bike</h1>
                {showError && <p className='showError'>All fields are Required!</p>}
                {showConfirmation && <p className='showConfirmation'>Check your email for confirmation of your ride.</p>}
                <form action="submit" className='grid' onSubmit={(event) => handleSubmit(event)}>

                    <div className="grid-item">
                        <label htmlFor="carType"> <FontAwesomeIcon icon={faMotorcycle} style={{color: "#EF1C24",}} className='icon'/>Select your car type
                        <FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                        <select name="carType" id="carType">
                            <option value="" selected disabled>Select your bike type</option>
                            <option value="Harley-Davidson">Harley-Davidson</option>
                            <option value="Ducati">Ducati</option>
                            <option value="Honda">Honda</option>
                            <option value="Royal Enfield">Royal Enfield</option>
                            <option value="BMW">BMW</option>
                            <option value="Kawasaki">Kawasaki</option>
                        </select>
                    </div>

                    <div className="grid-item">
                        <label htmlFor="pickUp"> <FontAwesomeIcon icon={faLocationDot} style={{color: "#EF1C24",}} className='icon'/>  Pick-up
                        <FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                        <select name="pickUp" id="pickUp">
                            <option value="" selected disabled>Select pick up location</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Manali">Manali</option>
                            <option value="Shimla">Shimla</option>
                            <option value="Leh">Leh</option>
                        </select>
                    </div>

                    <div className="grid-item">
                        <label htmlFor="dropOff"> <FontAwesomeIcon icon={faLocationDot} style={{color: "#EF1C24",}} className='icon'/>Drop-of
                        <FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                        <select name="dropOff" id="dropOff">
                            <option value="" selected disabled>Select drop off location</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Manali">Manali</option>
                            <option value="Shimla">Shimla</option>
                            <option value="Leh">Leh</option>
                        </select>
                    </div>

                    <div className="grid-item">
                        <label htmlFor="pickUpDate"> <FontAwesomeIcon icon={faCalendarDays} style={{color: "#EF1C24",}} className='icon'/>Pick-up
                        <FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                        <input type="date" id="pickUpDate" name="pickUpDate"></input>
                    </div>

                    <div className="grid-item">
                        <label htmlFor="dropOffDate"> <FontAwesomeIcon icon={faCalendarDays} style={{color: "#EF1C24",}} className='icon'/>Drop-of
                        <FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                        <input type="date" id="dropOffDate" name="dropOffDate"></input>
                    </div>

                    <button type='Submit' className='search'> Search </button>

                </form>
            </div>
        </div>
    );
}

export default Booking