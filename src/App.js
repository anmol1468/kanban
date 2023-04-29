import './App.scss';
import Projects from './componenets/Projects/Projects';
import Board from './componenets/board/Board';
import { useSelector } from 'react-redux';

function App() {

  const projects = useSelector(state => state.projects.projects)
  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  return (
      <div className="App">
        <Projects />
        <Board projects= {projects} visibleProjectIndex={visibleProjectIndex} />
      </div>
    
  );
}

export default App;
