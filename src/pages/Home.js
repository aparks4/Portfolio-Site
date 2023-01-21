import '../static/styles/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import TypeIt from 'typeit-react';
import JumpBtn from '../components/JumpBtn';

function Home() {

    return (
        <div className='page' id='home'>
            <div className="name-title-container"></div>
            <div className="name-title">
                <TypeIt id='typewriter' >
                    <strong id='my-name'>aryn parks</strong>
                    <h2 id='my-title'>full stack developer</h2>
                </TypeIt>
            </div>
        </div>

    )
}

export default Home;