
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import './personalForm.css'

// eslint-disable-next-line react/prop-types
function PersonalForm({onConfirmation, onClose}) {

    function handleConfirmation(event) {
        event.preventDefault()
        onConfirmation(true)
        onClose();
    }
    return (
        <div className="personalForm">
            <h5>PERSONAL INFORMATION</h5>
            <form className="pgrid">
                <div className="pgrid-item">
                    <label htmlFor="firstName">First Name<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="text" name='firstName'/>
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item">
                    <label htmlFor="lastName">Last Name<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="text" name='lastName'/>
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item">
                    <label htmlFor="phoneNumber">Phone Number<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" />
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item">
                    <label htmlFor="age">Age<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="number" name="age" id="age" />
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item emG">
                    <label htmlFor="email">Email<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="email" name="email" id="emailAdd" />
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item adG">
                    <label htmlFor="address">Address<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="text" name='address'/>
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item">
                    <label htmlFor="city">City<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="text" name="city" id="city" />
                    <p className='reqField'>This Field is required</p>
                </div>
                <div className="pgrid-item">
                    <label htmlFor="zipCode">Zip Code<FontAwesomeIcon icon={faAsterisk} style={{color: "#EF1C24",}} className='icon2' size='2xs'/></label>
                    <input type="text" name='zipCode'/>
                    <p className='reqField'>This Field is required</p>
                </div>
                <input type='Submit' className='psubmit' onClick={(event) => handleConfirmation(event)}/>
            </form>
        </div>
    );
}

export default PersonalForm;