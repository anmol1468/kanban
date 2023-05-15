import { useEffect } from 'react';
import './App.scss';
import Projects from './componenets/Projects/Projects';
import Board from './componenets/board/Board';
import { useSelector } from 'react-redux';

function App({changeTheme}) {

const nightMode = useSelector(state => state.nightMode)

// useEffect(() => {
//   changeTheme(!nightMode.nightMode)
// },nightMode)



  useEffect(() => {
    function updateColorScheme(isNightMode) {

  const root = document.documentElement;

  if (isNightMode) {
    root.style.setProperty('--color-primary', '#645FC6');
    root.style.setProperty('--background-1', '#2C2C38');
    root.style.setProperty('--background-2', '#21212D');
    root.style.setProperty('--main-text-color', '#FFFFFF');
    root.style.setProperty('--secondary-text-color', '#717581');
  } else {
    root.style.setProperty('--color-primary', '#645FC6');
    root.style.setProperty('--background-1', '#FFFFFF');
    root.style.setProperty('--background-2', '#F3F7FF');
    root.style.setProperty('--main-text-color', '#000000');
    root.style.setProperty('--secondary-text-color', '#5c5c5c');
  }
}

updateColorScheme(nightMode)
  }, [nightMode])

//   function updateColorScheme(isNightMode) {

//   const root = document.documentElement;

//   if (isNightMode) {
//     root.style.setProperty('--color-primary', '#645FC6');
//     root.style.setProperty('--background-1', '#2C2C38');
//     root.style.setProperty('--background-2', '#21212D');
//     root.style.setProperty('--main-text-color', '#FFFFFF');
//     root.style.setProperty('--secondary-text-color', '#717581');
//   } else {
//     root.style.setProperty('--color-primary', '#645FC6');
//     root.style.setProperty('--background-1', '#FFFFFF');
//     root.style.setProperty('--background-2', '#F3F7FF');
//     root.style.setProperty('--main-text-color', '#000000');
//     root.style.setProperty('--secondary-text-color', '#5c5c5c');
//   }
// }

// const nightMode = useSelector(state => state.nightMode)

// updateColorScheme(nightMode)

  const projects = useSelector(state => state.projects.projects)
  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  return (
      <div className="App">
        <Projects/>
        <Board projects= {projects} visibleProjectIndex={visibleProjectIndex} />
      </div>
    
  );
}

export default App;
