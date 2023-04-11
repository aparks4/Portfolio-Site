import { Link, useLocation } from 'react-router-dom';
import pdf from '../Resume.pdf';

export const WebNav = () => {
    const location = useLocation();
  


    const links = [
        {to: '/', label: 'home'},
        {to: '/about', label: 'about'},
        {to: '/projects', label: 'projects'},
        {to: '/contact', label: 'contact'},
    ]

    return (
        <>
            <nav className="web-nav">
                {links.map((link) => {
                    const currentPage = link.to === location.pathname;
                    return !currentPage ? (
                        <Link key={link.to} to={link.to}>{link.label}</Link>
                    ): null;
                })}
                <a href={pdf} target="_blank" rel="noreferrer">resume</a>

            </nav>
        
        </>
    )
}