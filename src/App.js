import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import ProductDescriptionPage from './components/ProductDescriptionPage/ProductDescriptionPage';
import SideNavMenu from './components/SideNavMenu/SideNavMenu';
import { useState } from 'react';

function App() {

  const navigate = useNavigate();
  const [navBar, setNavbarState] = useState(false);

  function navigateToPages(){
    navigate('/');
  }

  const toggleDrawer = (open) => () => {
    setNavbarState(open);
    console.log(navBar);
  };


  return (
   <>
{    {navBar} ? <SideNavMenu navShow = {navBar}></SideNavMenu> : null
}   <header>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" rel="stylesheet"></link>
    </header>
      <div className="header">
        <div className='head' onClick={()=> navigateToPages()}>ECOMMERCE</div>
        <div className="all-icons">
          <i className="fa fa-regular fa-user icon-size"></i>
          <i className="fa fa-regular fa-heart icon-size"></i>
          {/* <span className='icon-size'>🛒</span> */}
          <i className="fab fab-solid fab-cart-shopping icon-size"></i>
          <i className="fa fa-solid fa-bars icon-size" onClick={toggleDrawer(true)}></i>
        </div>
      </div>
        <Routes>
        <Route path="/" element={<HomePage/>} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/product" element={<ProductPage/>} />
         <Route path="/contactus" element={<ContactUsPage/>} />
         <Route path="/productDescription" element={<ProductDescriptionPage/>} />
       </Routes>
       <div className="footer">
        <div className='footer-head'>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div className='social-icons'>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className=" fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <hr></hr>
        <div className='footer-content'>
          <div className='subscribe-input'>
            <p className='newsletter'>Newsletter</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Your email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className='footer-text'>
              It is a long established fact that a render will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem I
          </div>
        </div>
      </div>
    
   </>
  );
}

export default App;
