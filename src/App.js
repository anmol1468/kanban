import { useEffect, useState } from 'react';
import './App.scss';
import Projects from './componenets/Projects/Projects';
import Board from './componenets/board/Board';
import { useSelector } from 'react-redux';
import ProjectPromptBox from './componenets/promptBox/ProjectPromptBox';

const App = ({changeTheme}) => {

  const [showProjectPromt, setShowProjectPrompt] = useState(false)

const nightMode = useSelector(state => state.theme.nightMode)

useEffect(() => {
    // Update local storage when nightMode changes
    localStorage.setItem("nightMode", JSON.stringify(nightMode));
  }, [nightMode]);

  const projects = useSelector(state => state.projects.projects)
  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  return (
      <div className="App">
        <Projects setShowProjectPrompt={setShowProjectPrompt} changeTheme={changeTheme}  />
        <Board projects= {projects} visibleProjectIndex={visibleProjectIndex} />
        {showProjectPromt && <ProjectPromptBox setShowProjectPrompt={setShowProjectPrompt} ></ProjectPromptBox>}
      </div>
    
  );
}

export default App;
