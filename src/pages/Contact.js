import Nav from "../components/Nav";

function Contact() {
    return (
        <div id='contact'>
            <h1>Contact</h1>
            <Nav />
            <div className='contact-info-container'>
                <h3>Email: arynmparks@gmail.com</h3>
                <h3>Phone: 770-375-5157</h3>
                <h3>LinkedIn: <a href="https://www.linkedin.com/in/aryn-parks/" target='_blank' rel='noreferrer'>linkedin.com/in/aryn-parks</a></h3>
            </div>
        </div>
    )
}

export default Contact;