import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../../redux/taskActions";
import './ProductPage.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";

function ProductPage(){

    const navigate = useNavigate();

    const productState = useSelector((state) => state.products);
    const dispatch = useDispatch();

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

    function navigateToProductDescriptionPage(item){
        navigate('/productDescription', {state: item});
    }


    return(
        <>
            <h1>Our Product</h1>
            <Grid container spacing={2} className="all-products-container">
                {
                    productState.productsData.map(el =>
                        <Grid item xs={4} className="all-products-containerbox" key={el.imageUrl}>
                            <div className="product">
                                <img src={el.imageUrl} alt="" height={250} width={250}></img>
                                <div className="middle">
                                    <Button className="add-to-cart-button">+ ADD TO CART</Button>
                                </div>
                            </div>
                            <div className="product-description" onClick={() => navigateToProductDescriptionPage(el)}>
                                <div className="product-price">
                                    <p className="selling-price">{el.sellingPrice}</p>
                                    <p><s>{el.mrp}</s></p>
                                </div>
                                <div className="product-name">{el.itemName}</div>
                            </div>
                        </Grid>
                        
                        )
                }
            </Grid>
        </>
    )

}

export default ProductPage;