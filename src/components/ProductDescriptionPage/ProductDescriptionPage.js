import { Button} from '@mui/base';
import { useLocation } from 'react-router-dom';
import './ProductDescriptionPage.css';

function ProductDescriptionPage(){
    
    const {state} = useLocation();

      return(
        <>
            <div>
                <div>
                    <img src={state.imageUrl} alt=""></img>
                </div>
                <div>
                    <h1>{state.itemName}</h1>
                    <hr/>
                    <div>
                        <p><s>{state.mrp}</s></p>
                        <p>{state.sellingPrice}</p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star" checked></span>
                        <span className="fa fa-star"></span>
                        <span>(5 customer review)</span>
                    </div>
                    <hr/>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo.
                        2 in stock</p>

                    <div>
                        <span>1</span>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
            {/* <div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Descriptions" {...a11yProps(0)} />
                            <Tab label="Reviews(2)" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={{value: value}} index={0}>
                        Descriptions
                    </CustomTabPanel>
                    <CustomTabPanel value={{value: value}} index={1}>
                        Reviews(2)
                    </CustomTabPanel>
                </Box>
            </div> */}
        </>
    )
}

export default ProductDescriptionPage;