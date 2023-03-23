import '../static/styles/About.css';
import { AboutBlurb } from "../components/AboutBlurb";
import { SkillsSection } from '../components/SkillsSection';


export const AboutPage = () => {
    return (
        <>
            <div className="about-page">
                <h1>about me</h1>
                <AboutBlurb />
                <h1>technologies</h1>
                <SkillsSection />
            </div>
        </>
    )
}
