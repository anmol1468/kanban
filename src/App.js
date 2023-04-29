import './App.scss';
import Projects from './componenets/Projects/Projects';
import Board from './componenets/board/Board';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './styles/globalTheme.jsx';
import { grids } from './styles/localStyles.jsx';

function App() {
  const projects = useSelector(state => state.projects.projects)

  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  const { RootGrid, ProjectGrid, BoardGrid } = grids;

  return (
    <ThemeProvider theme={mainTheme}>
      <RootGrid spacing={4} container>
        < ProjectGrid xs={12} md={4} item>
          <Projects />
        </ProjectGrid>

        <BoardGrid xs={12} md={8} item>
          <Board projects={projects} visibleProjectIndex={visibleProjectIndex} />
        </BoardGrid>
      </RootGrid>
    </ThemeProvider>

  );
}

export default App;
