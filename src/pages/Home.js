import '../static/styles/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import TypeIt from 'typeit-react';

function Home() {

    return (
        <div className='page' id='home'>
            {/* <TypeIt 
                options={{
                    strings: ['Aryn Parks', 'Full Stack Developer'],
                    speed: 200,
                    waitUntilVisible: true,
                }}
            /> */}
            <TypeIt id='typewriter' >
                <strong id='my-name'>Aryn Parks</strong>
                <h2 id='my-title'>Full Stack Developer</h2>
            </TypeIt>
        </div>

    )
}

export default Home;