import { Button} from '@mui/base';
import { useLocation } from 'react-router-dom';
import './ProductDescriptionPage.css';
import { Tabs, Tab, AppBar, Box, Typography } from "@material-ui/core";
import { useState } from 'react';


function ProductDescriptionPage(){
    
    const {state} = useLocation();

    const [index, setIndex] = useState(0);
    const onTabClicked = (event, index) => {
    setIndex(index);
    };

    const Panel = (props) => (
        <div hidden={props.value !== props.index}>
          <Typography>{props.children}</Typography>
        </div>
      );

      return(
        <>
            <div className='product-description-container'>
                <div>
                    <img src={state.imageUrl} alt="" height={"85%"}></img>
                </div>
                <div>
                    <h3>{state.itemName}</h3>
                    <hr/>
                    <div className='product-price-details'>
                        <p className='product-mrp'><s>{state.mrp}</s></p>
                        <p className='product-sp'>{state.sellingPrice}</p>
                        <p className='stars'>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star" checked></span>
                        <span className="fa fa-star"></span>
                        </p>
                        <p className='no-of-reviews'>(5 customer review)</p>
                    </div>
                    <hr/>
                    <p className='product-review-para'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo.
                        2 in stock</p>

                    <div>
                        <span className='add-to-cart-item'>1</span>
                        <Button className='add-to-cart read-more-button'>Add to Cart</Button>
                    </div>
                </div>
            </div>
            <div>
                <Box>
                    <AppBar position="static">
                        <Tabs value={index} onChange={onTabClicked}>
                            <Tab label="Description" />
                            <Tab label="Review(2)" />
                        </Tabs>
                    </AppBar>
                    <Panel value={index} index={0}>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac elementum 
                                elit. Morbi eu arcu ipsum. Aliquam lobortis accumsan quam ac convallis. Fusce 
                                elit mauris, aliquet at odio vel, convallis vehicula nisi. Morbi vitae porttitor
                                dolor. Integer eget metus sem. Nam venenatis mauris vel leo pulvinar, id rutrum 
                                dui varius. Nunc ac varius quam, non convallis magna. Donec suscipit commodo 
                                dapibus.</p>
                            <p>Vestibulum et ullamcorper ligula. Morbi bibendum tempor rutrum. Pelle tesque 
                                auctor purus id molestie ornare.Donec eu lobortis risus. Pellentesque sed 
                                aliquam lorem. Praesent pulvinar lorem vel mauris ultrices posuere. Phasellus 
                                elit ex, gravida a semper ut, venenatis vitae diam. Nullam eget leo massa. 
                                Aenean eu consequat arcu, vitae scelerisque quam. Suspendisse risus turpis, 
                                pharetra a finibus vitae, lobortis et mi.</p>
                        </div>
                    </Panel>
                    <Panel value={index} index={1}>
                        Review(2)
                        {
                            
                        }
                    </Panel>
                </Box>
            </div>
            
        </>
    )
}

export default ProductDescriptionPage;