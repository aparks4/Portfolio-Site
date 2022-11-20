import '../static/styles/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import TypeIt from 'typeit-react';
import JumpBtn from '../components/JumpBtn';

function Home() {

    return (
        <div className='page' id='home'>
            <TypeIt id='typewriter' >
                <strong id='my-name'>Aryn Parks</strong>
                <h2 id='my-title'>Full Stack Developer</h2>
            </TypeIt>
            <JumpBtn jumpTo={"#about"} />

        </div>

    )
}

export default Home;