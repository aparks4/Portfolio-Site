import pdf from '../Resume.pdf';
import { HashLink } from 'react-router-hash-link';

function MobileNav(props) {
    return (
        <div id='mobile-nav'>
            <button onClick={props.redirect}><HashLink to={'#home'}>Home</HashLink></button>
            <button onClick={props.redirect}><HashLink to={'#about'}>About</HashLink></button>
            <button onClick={props.redirect}><HashLink to={'#projects'}>Projects</HashLink></button>
            <button onClick={props.redirect}><HashLink to={'#contact'}>Contact</HashLink></button>
            <button><a href={pdf} target='_blank' rel='noreferrer'>Resume</a></button>
        </div>
    )
}

export default MobileNav;