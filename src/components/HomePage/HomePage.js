import sofa_image from '../../assets/Images/home.png';
import './HomePage.css';
import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {useDispatch, useSelector} from "react-redux";
import { requestCorousels, requestProducts, requestTrendingCategories } from "./../../redux/taskActions";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();
 
    const corouselState = useSelector((state) => state.task);
    const trendingState = useSelector((state) => state.trendingCategories);
    const productState = useSelector((state) => state.products);
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

    useEffect(() => {
        async function fetchProductsData(){
            try{
                const json = await axios.get("https://mocki.io/v1/7cb4322e-a80c-4365-8f65-6a01c8a28ae0");
                dispatch(requestProducts(json.data))
            }
            catch{
            }
        }
        fetchProductsData();
    }, []);
    
    function shopNowClicked(){
        navigate("/product")
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
                    <button onClick={shopNowClicked} className="shop-now-button">SHOP NOW &gt;</button>
                </div>
                <div>
                    <img src={sofa_image} alt='sofa_image' height="550px"></img>
                </div>
            </div>
            <div>
                <Carousel className='offer-corousel'>
                    {
                        corouselState.corouselData?.map(el => 
                            <Carousel.Item key={el.imageUrl}>
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
                                        <img src={el.imageUrl} alt="" height={126}></img>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    }                    
                </Carousel>
                 <div className='text-bottom'><span className='subtext-bottom'>Trending</span>&nbsp;Categories</div>
                 <div className='trending-categories-container'>
                    {
                        trendingState.trendingStateData?.map(el =>
                            <div key = {el.itemImage}>
                                <img src={el.itemImage} alt=""></img>
                                <p><b>{el.itemType}</b></p>
                            </div>
                            )
                    }
                 </div>
                 <div className='home-middle-content-container' >
                    <div className='text-bottom'><span className='subtext-bottom'>Featured</span>&nbsp;Brands</div>
                    <div className='featured-brands-container'>
                        {
                            productState.productsData.filter((item, idx) => idx < 4).map(el =>
                                <div>
                                    <img src={el.imageUrl} alt="" height={150} width={150}></img>
                                    <p>{el.itemName}</p>
                                    <p>{el.sellingPrice}</p>
                                </div>
                                )
                        }
                    </div>
                 </div>
            </div>

        </>
    )
}

export default HomePage;