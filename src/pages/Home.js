import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import '../static/styles/Home.css';
import ContactLinks from '../components/ContactLinks';
import Initials from '../components/Initials';

function Home() {
    return (
        <div className='page' id='home'>
            <h1>Aryn Parks</h1>
            <h2>Full Stack Developer</h2>
        </div>
    )
}

export default Home;