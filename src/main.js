import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { TestPage } from './pages/Test';
import { ProjectsPage } from './pages/Projects';



export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/test" element={<TestPage />} />  
        </Routes>
    )
}