import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillFileText } from 'react-icons/ai';
import pdf from '../Resume.pdf'

function ContactLinks() {
    return (
        <div className='contact-links-container'>
            <a href="mailto:arynmparks@gmail.com" target='_blank' rel='noreferrer'>
                <AiOutlineMail />
            </a>
            <a href="https://www.linkedin.com/in/aryn-parks/" target='_blank' rel='noreferrer'>
                <AiFillLinkedin />
            </a>
            <a href="http://www.github.com/aparks4" target='_blank' rel='noreferrer'>
                <AiFillGithub />
            </a>
            <a href={pdf} target='_blank' rel='noreferrer'>
                <AiFillFileText />
            </a>
        </div>
    )
}

export default ContactLinks;