import Presentation from "./components/presentation";
import AboutMe from './components/aboutMe'
import Projects from './components/projects/projects'
import Studies from './components/studies'
import Contact from './components/contact'
 
const App = () => {
  return (
    <>
      <Presentation />
      <AboutMe />
      <Projects />
      <Studies />
      <Contact />
    </>
  );
};

export default App;
