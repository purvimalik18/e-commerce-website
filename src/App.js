import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
   <>
   <header>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" rel="stylesheet"></link>
    </header>
      <div className="header">
        <h2>ECOMMERCE</h2>
        <div className="all-icons">
          <i className="fa fa-regular fa-user icon-size"></i>
          <i className="fa fa-regular fa-heart icon-size"></i>
          {/* <span className='icon-size'>🛒</span> */}
          <i className="fab fab-solid fab-cart-shopping icon-size"></i>
          <i className="fa fa-solid fa-bars icon-size"></i>
        </div>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<HomePage />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

export default App;
