import Initials from "./Initials";


function Nav() {
    return (
        <div className='nav-container'>
            <Initials />
            <nav>
                <a href='/'>Home</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </div>
    )
}

export default Nav;