import { useState } from "react";
import "./ContactUsPage.css";



function ContactUsPage(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

    
      const [errors, setErrors] = useState({});
    
      const validateForm = () => {
        const newErrors = {};
    
        if (!formData.name) {
          newErrors.name = '*Name is required';
        }
    
        if (!formData.email) {
          newErrors.email = '*Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
    
        if (!formData.phone) {
          newErrors.phone = '*Phone is required';
        }
    
        if (!formData.message) {
          newErrors.message = '*Message is required';
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            alert('Form submitted successfully !');
        }else {
          alert('Form has validation errors !');
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
    return(
        <>
            <h1>Contact Us</h1>
        <div className='form-container'>
            <form onSubmit={handleSubmit} className="contact-form">
                    <input
                    type="text"
                    name="name" className='input-box'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    />
                    <span className="error"><i>{errors.name}</i></span>

                    <input
                    type="text"
                    name="email" className='input-box'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                    <span className="error"><i>{errors.email}</i></span>

                    <input
                    type="text"
                    name="phone" className='input-box'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    />
                    <span className="error"><i>{errors.phone}</i></span>

                    <textarea
                    name="message" className='input-box message-box'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    />
                    <span className="error"><i>{errors.message}</i></span>

                <button type="submit" className='read-more-button form-submit-button'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactUsPage;

