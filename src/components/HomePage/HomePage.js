import sofa_image from '../../assets/Images/home.png';
import './HomePage.css';
import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {useDispatch, useSelector} from "react-redux";
import { requestCorousels, requestTrendingCategories } from "./../../redux/taskActions";
import axios from "axios";

function HomePage() {

    const corouselState = useSelector((state) => state.task);
    const trendingState = useSelector((state) => state.trendingCategories);
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchCorouselData(){
            try{
                const json = await axios.get("https://652cae5dd0d1df5273ef8e57.mockapi.io/e-commerce/getCorouselData");
                dispatch(requestCorousels(json.data))
            }
            catch{
            }
        }
        
        fetchCorouselData();
    }, []);

    useEffect(() => {
        async function fetchTrendingCategoriesData(){
            try{
                const json = await axios.get("https://652cae5dd0d1df5273ef8e57.mockapi.io/e-commerce/trendingCategories");
                dispatch(requestTrendingCategories(json.data))
            }
            catch{
            }
        }
        fetchTrendingCategoriesData();
    }, []);

    console.log(corouselState);
    console.log(trendingState);

    
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
                    <button onClick={shopNowClicked} className="shop-now-button">SHOP NOW </button>
                </div>
                <div>
                    <img src={sofa_image} alt='sofa_image' height="550px"></img>
                </div>
            </div>
            <div>
                <Carousel className='offer-corousel'>
                    {
                        corouselState.corouselData?.map(el => 
                            <Carousel.Item interval={1000}>
                                <div className='corousel-container'>
                                    <div className='corousel-deal-text-container'>
                                        <div className='corousel-deal'>
                                            {el.deal}
                                        </div>
                                        <div className='corousel-deal-text'>
                                            {el.dealText}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={el.imageUrl} alt=""></img>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    }                    
                </Carousel>
                 <div className='text-bottom'><span className='subtext-bottom'>Trending</span>&nbsp;Categories</div>
                 <div className='home-middle-content-container' >
                    <div className='text-bottom'><span className='subtext-bottom'>Featured</span>&nbsp;Brands</div>
                    <div className='text-bottom'><span className='subtext-bottom'>Contact</span>&nbsp;Us</div>
                    <div className='form-container'>
                        <form className='form-class'>
                            <input type="text" name="name" placeholder='Name' className='input-box'/>
                            <input type="text" name="email" placeholder='Email' className='input-box'/>
                            <input type="text" name="phone" placeholder='Phone' className='input-box'/>
                            <textarea id="textbox" name="message" rows="4" cols="50" className='input-box message-box' placeholder='Message'></textarea>
                            <button className='read-more-button form-submit-button'>Submit</button>
                        </form>
                    </div>
                    
                 </div>
            </div>

        </>
    )
}

export default HomePage;