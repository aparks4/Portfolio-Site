import Initials from "./Initials";
import pdf from '../Resume.pdf';
import {FaBars} from 'react-icons/fa';


function Nav(props) {
    return (
        <div className='nav-container'>
            <Initials />
            <nav id='main-nav'>
                <button><a href='#home'>Home</a></button>
                <button><a href='#about'>About</a></button>
                <button><a href='#projects'>Projects</a></button>
                <button><a href='#contact'>Contact</a></button>
                <button><a href={pdf} target='_blank' rel='noreferrer'>Resume</a></button>
            </nav>
            <button id='nav-btn' onClick={props.handleClick}><FaBars /></button>
        </div>
    )
}

export default Nav;