import sofa_image from '../../assets/Images/home.png';
import './HomePage.css'

function HomePage() {
    function shopNowClicked(){

    }
    return (
        <>
            <div className='home-header-container'>
                <div className='home-header'>
                    <div className="header-text">
                        <span className="header-subtext">THE LATEST</span>
                        <br></br>
                        FURNITURE <br></br>DESIGN
                    </div>
                    <button onClick={shopNowClicked} className="read-more-button">Shop Now</button>
                </div>
                <div>
                    <img src={sofa_image} alt='sofa_image' height="550px"></img>
                </div>
            </div>
        </>
    )
}

export default HomePage;