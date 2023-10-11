import table_image from '../../assets/Images/about.png';
import './AboutPage.css'

function HomePage() {
    function readMoreClick(){

    }
    return (
        <>
            <h1>About</h1>
            <div className="about-container">
                <div className="about-content">
                    <h2 className='about-heading'>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi</p>
                    <button onClick={readMoreClick} className="read-more-button">Read More</button>
                </div>
                <div className="about-image">
                    <img src={table_image} alt="about_image" height='345px'></img>
                </div>
            </div>
        </>
    );
}

export default HomePage;