function SkillsList() {
    return (
        <div className='skillslist-container'>
            <div className='skills-section'>
                <p className='skills-title'>Languages</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Python</p>
                <p>SQL</p>
                <p>Mongo</p>
                <p>TypeScript</p>
            </div>
            <div className='skills-section'>
                <p className='skills-title'>Libraries & Frameworks</p>
                <p>React.js</p>
                <p>Express.js</p>
                <p>Django</p>
                <p>Jquery</p>
                <p>Bootstrap</p>
            </div>
            <div className='skills-section'>
                <p className='skills-title'>Database</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
                <div className='skills-section'>
                    <p className='skills-title'>Version Control</p>
                    <p>Git</p>
                    <p>Github</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsList;