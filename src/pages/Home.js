import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import '../static/styles/Home.css';
import ContactLinks from '../components/ContactLinks';

function Home() {
    return (
        <div className='home-container'>
            <div className='home-nav'>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}

export default Home;