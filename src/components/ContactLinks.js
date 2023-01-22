import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillFileText } from 'react-icons/ai';
import pdf from '../Resume.pdf'

function ContactLinks() {
    return (
        <div className='contact-links-container'>
            <div className='contact-link contact-link-left'>
                <a href="mailto:arynmparks@gmail.com" target='_blank' rel='noreferrer'>
                    <AiOutlineMail />
                </a>
                <p>arynmparks@gmail.com</p>
            </div>
            <div className='contact-link contact-link-left'>
                <a href="https://www.linkedin.com/in/aryn-parks/" target='_blank' rel='noreferrer'>
                    <AiFillLinkedin />
                </a>
                <p>aryn-parks</p>
            </div>
            <div className='contact-link contact-link-right'>
                <a href="http://www.github.com/aparks4" target='_blank' rel='noreferrer'>
                    <AiFillGithub />
                </a>
                <p>aparks4</p>
            </div>
            <div className='contact-link contact-link-right'>
                <a href={pdf} target='_blank' rel='noreferrer'>
                    <AiFillFileText />
                </a>
                <p>download resume</p>
            </div>
        </div>
    )
}

export default ContactLinks;