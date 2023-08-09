import './header.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
function Header() {

    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.style.transform = 'translateZ(0)';
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header>
  
            <a href="">
                <LazyLoadImage src="/flights/moto.webp" alt="Bike Logo" className='logo'/>
            </a>

            <ul className='nav-links'>
                <li className='item1'><a href="">Home</a></li>
                <li className='item2'><a href="#aboutComponent" onClick={(e) => handleLinkClick(e, 'aboutComponent')}>About</a></li>
                <li className='item3'><a href="#vehicles" onClick={(e) => handleLinkClick(e, 'vehicles')}>Vehical Models</a></li>
                <li className='item4'> <a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonials</a></li>
                {/* <li className='item4'> <a href="#contactComponent" onClick={(e) => handleLinkClick(e, 'contactComponent')}>Our Team</a></li> */}
                <li className='item5'> <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
            </ul>

            <div className="register">
                <p><a href="">Sign In</a></p>
                <button>Register</button>
            </div>
            
        </header>
    )
}

export default Header;