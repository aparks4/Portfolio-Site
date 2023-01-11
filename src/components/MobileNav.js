import pdf from '../Resume.pdf';
import { HashLink } from 'react-router-hash-link';

function MobileNav(props) {
    return (
        <div id='mobile-nav'>
            <button onClick={props.redirect}><HashLink to={'#home'}><span id="underscore">_</span>Home<span id="underscore">_</span></HashLink></button>
            <button onClick={props.redirect}><HashLink to={'#about'}><span id="underscore">_</span>About<span id="underscore">_</span></HashLink></button>
            <button onClick={props.redirect}><HashLink to={'#projects'}><span id="underscore">_</span>Projects<span id="underscore">_</span></HashLink></button>
            <button onClick={props.redirect}><HashLink to={'#contact'}><span id="underscore">_</span>Contact<span id="underscore">_</span></HashLink></button>
            <button><a href={pdf} target='_blank' rel='noreferrer'><span id="underscore">_</span>Resume<span id="underscore">_</span></a></button>
        </div>
    )
}

export default MobileNav;