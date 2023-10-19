import "./ContactUsPage.css";


function ContactUsPage(){
    return(
        <>
            <h1>Contact Us</h1>
        <div className='form-container'>
            <form className='form-class'>
                <input type="text" name="name" placeholder='Name' className='input-box'/>
                <input type="text" name="email" placeholder='Email' className='input-box'/>
                <input type="text" name="phone" placeholder='Phone' className='input-box'/>
                <textarea id="textbox" name="message" rows="4" cols="50" className='input-box message-box' placeholder='Message'></textarea>
                <button className='read-more-button form-submit-button'>Submit</button>
            </form>
        </div>
        </>
    )
}

export default ContactUsPage;

