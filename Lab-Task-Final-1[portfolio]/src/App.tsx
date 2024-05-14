import AboutMe from './components/about_me';
import EducationList from './components/EducationList';
import ProfessionalCompetencies from './components/ProfessionalCompetencies';
import AchievementList from './components/AchievementList'; // Correct import
import Picture from './components/Picture';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <h1 align="center">Welcome to my CV</h1>
            <Picture src="img.jpg" alt="Your Name" /> 
            <AboutMe />
            <Contact />
            <EducationList />
            <ProfessionalCompetencies />
            <AchievementList /> 
        </>
    );
}

export default App;
