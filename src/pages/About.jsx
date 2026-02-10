import SidePanel from "../components/SidePanel";
import Hero from '../components/Hero';
import Favorites from '../components/Favorites';

function About() {
    return (
        <div style={{ display: "flex" }}>
            <SidePanel />
            <div style={{ flex: 1 }}>
                <Hero />
                <Favorites />
            </div>
        </div>
    );
}

export default About;