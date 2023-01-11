import Initials from "./Initials";
import pdf from '../Resume.pdf';
import {FaBars} from 'react-icons/fa';


function Nav(props) {
    return (
        <div className='nav-container'>
            <Initials />
            <nav id='main-nav'>
                <a href='#home'><span id="underscore">_</span>Home<span id="underscore">_</span></a>
                <a href='#about'><span id="underscore">_</span>About<span id="underscore">_</span></a>
                <a href='#projects'><span id="underscore">_</span>Projects<span id="underscore">_</span></a>
                <a href='#contact'><span id="underscore">_</span>Contact<span id="underscore">_</span></a>
                <a href={pdf} target='_blank' rel='noreferrer'><span id="underscore">_</span>Resume<span id="underscore">_</span></a>
            </nav>
            <button id='nav-btn' onClick={props.handleClick}><FaBars /></button>
        </div>
    )
}

export default Nav;