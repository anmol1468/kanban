import './App.scss';
import Board from './componenets/board/Board';
import store from './store'
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {


  return (
    
    <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
    </DndProvider>
  );
}

export default App;
