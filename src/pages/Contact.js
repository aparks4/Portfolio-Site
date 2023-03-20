import '../static/styles/Contact.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillFileText } from 'react-icons/ai';
import pdf from '../Resume.pdf';
import { Link } from 'react-router-dom';


export const ContactPage = () => {
    return (
        <>
            <div className="contact-page">
                <h1>let's get in touch</h1>
                <div className="contact-main">
                    <div className="contact-card">
                        <a href="mailto:arynmparks@gmail.com" target='_blank' rel='noreferrer'>
                            <AiOutlineMail />
                        </a>
                        <p>arynmparks<br/>@gmail.com</p>
                    </div>
                    <div className="contact-card">
                        <a href="https://www.linkedin.com/in/aryn-parks/" target='_blank' rel='noreferrer'>
                            <AiFillLinkedin />
                        </a>
                        <p>aryn-parks</p>
                    </div>
                    <div className="contact-card">
                        <a href="http://www.github.com/aparks4" target='_blank' rel='noreferrer'>
                            <AiFillGithub />
                        </a>
                        <p>aparks4</p>
                    </div>
                    <div className="contact-card">
                        <a href={pdf} target='_blank' rel='noreferrer'>
                            <AiFillFileText />
                        </a>
                        <p>download<br/>resume</p>
                    </div>

                </div>
            </div>
        </>
    )
}
