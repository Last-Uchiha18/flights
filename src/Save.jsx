import './save.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
function Save() {
    return (
        <div>
            <div className='save'>
                <h1>Save big with our cheap bike rental!</h1>
                <h1>Top Airports. Local Suppliers. 24/7 Support.</h1>
            </div>
            <LazyLoadImage src="/flights/multiple.png" alt="" className='multipleBikes'/>
        </div>
    );
}

export default Save;