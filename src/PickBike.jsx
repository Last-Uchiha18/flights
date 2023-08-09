/* eslint-disable react/prop-types */
import { useState } from 'react';
import './pickBike.css'
import SelectedBike from './SelectedBike';


function Button({ name, selectedBike, onClick }) {
    return (
      <button
        className={selectedBike === name ? 'selectedButton' : ''}
        onClick={onClick}
      >
        {name}
      </button>
    );
}

function PickBike() {

    const [bike, setBike] = useState("Harley-Davidson")

    return (
        <div className="pickBike" id="vehicles">
            <h2>Vehicle Models</h2>
            <h1>Our rental fleet</h1>
            <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

            <div className='bike-container'>
                <div className="bike-buttons">
                    <Button name="Harley-Davidson" selectedBike={bike} onClick={() => setBike("Harley-Davidson")} />
                    <Button name="Honda" selectedBike={bike} onClick={() => setBike("Honda")} />
                    <Button name="BMW" selectedBike={bike} onClick={() => setBike("BMW")} />
                    <Button name="Kawasaki" selectedBike={bike} onClick={() => setBike("Kawasaki")} />
                    <Button name="Royal Enfield" selectedBike={bike} onClick={() => setBike("Royal Enfield")} />
                    <Button name="Ducati" selectedBike={bike} onClick={() => setBike("Ducati")} />
                </div>
                <SelectedBike name={bike}/>
        
            </div>
        </div>
    )
}

export default PickBike;