import '../static/styles/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';

function Home() {
    return (
        <div className='page' id='home'>
            <h1><TypeWriterEffect startDelay={50} text='Aryn Parks' typeSpeed={250} eraseSpeed={250}/></h1>
            <h2>Full Stack Developer</h2>
        </div>

    )
}

export default Home;