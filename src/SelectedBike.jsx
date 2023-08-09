// eslint-disable-next-line react/prop-types
import { LazyLoadImage } from "react-lazy-load-image-component";
function SelectedBike({name}) {
    const details = {
        "Harley-Davidson": {Model: 'Harley', 
                            Mark: 'A1', 
                            Year: 2016, 
                            Capacity: '890cc' , 
                            Transmission: 'Manual' , 
                            Fuel: 'Petrol', 
                            Power: '140hp', 
                            Rent: 45,
                            imgUrl: "/flights/harley.png" },
                            
        Honda: {Model: 'Honda', 
                Mark: 'A1' , Year:2018 , 
                Capacity: '860cc', 
                Transmission: 'Manual', 
                Fuel:'Diesel' , 
                Power: '144hp', 
                Rent: 55,
                imgUrl: "/flights/honda.png"},
        BMW: {Model: 'BMW', Mark: 'A1', Year:2020 , Capacity: '910cc', Transmission: 'Automatic' , Fuel:'Petrol' , Power: '130hp', Rent: 50,
        imgUrl: "/flights/bmw.png"},
        Kawasaki: {Model: 'Kawasaki', Mark: 'A1', Year: 2015, Capacity: '840cc', Transmission: 'Automatic', Fuel: 'Diesel', Power: '160hp', Rent: 42,
        imgUrl: "/flights/kawasaki.png"},
        "Royal Enfield": {Model: 'Royal Enfield', Mark: 'A1', Year: 2021, 'Capacity': '865cc', Transmission: 'Manual', Fuel: 'Diesel', Power: '155hp', Rent: 69,
        imgUrl: "/flights/re.png"},
        Ducati: {Model: 'Ductati', Mark: 'A1', Year: 2017 , Capacity: '895cc', Transmission: 'Automatic', Fuel: 'Petrol', Power: '120hp', Rent: 62,
        imgUrl: "/flights/ducati.webp"},
    }

    const currentBike = details[name]
    return (
        <>
                <LazyLoadImage src={currentBike.imgUrl} alt="" />
                <div className="selected-bike">
                    <div className='rent'>
                        <h1> {currentBike.Rent}$ rent per day</h1>
                    </div>
                    <div className='bike-details'>
                        <span>Model</span>
                        <span>{name}</span>
                    </div>
                    <div className='bike-details'>
                        <span>Mark</span>
                        <span>{currentBike.Mark}</span>
                    </div>
                    <div className='bike-details'>
                        <span>Year</span>
                        <span>{currentBike.Year}</span>
                    </div>
                    <div className='bike-details'>
                        <span>Capacity</span>
                        <span>{currentBike.Capacity}</span>
                    </div>
                    <div className='bike-details'>
                        <span>Transmission</span>
                        <span>{currentBike.Transmission}</span>
                    </div>
                    <div className='bike-details'>
                        <span>Fuel</span>
                        <span>{currentBike.Fuel}</span>
                    </div>
                    <div className='bike-details'>
                        <span>Power</span>
                        <span>{currentBike.Power}</span>
                    </div>
                    <button className='reserve'>Reserve Now</button>
                </div>
        </>
    )
}

export default SelectedBike;