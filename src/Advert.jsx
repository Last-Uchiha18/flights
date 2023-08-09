import './advert.css'

function Advert() {
    return (
        <div className='advt' id="aboutComponent">
            <h2> Plan your trip now </h2>
            <h1>Quick & easy bike rental</h1>
            <div className='advtGroup'>
                <li className='item'>
                    <img src="/flights/abike.svg" alt="" className='svg'/>
                    <h3>Select Bike</h3>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </li>
                <li className='item'>
                    <img src="/flights/op.svg" alt="" className='svg'/>
                    <h3>Contact Operator</h3>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </li>
                <li className='item'>
                    <img src="/flights/mbike.svg" alt="" className='svg'/>
                    <h3>Let&apos;s Drive</h3>
                    <p>Whether you&apos;re hitting the open road, we&apos;ve got you covered with our wide range of cars</p>
                </li>
            </div>
        </div>
    )
}

export default Advert;