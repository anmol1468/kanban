import React, { useState } from 'react'
import styles from './Board.module.scss'
import State from '../state/State'
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import { addToDo, addDoing, addDone, removeToDo, removeDoing, removeDone } from '../projectSlice'
import PromptBox from '../promptBox/PromptBox'

// const toDo = localStorage.getItem(`toDo`)

const Board = ({projects, visibleProjectIndex}) => {


  const toDo = localStorage.getItem(`projects`) !== null ? JSON.parse(localStorage.getItem(`projects`))[visibleProjectIndex].toDo : [];
  const doing = localStorage.getItem(`projects`) !== null ? JSON.parse(localStorage.getItem(`projects`))[visibleProjectIndex].doing : [];
  const done = localStorage.getItem(`projects`) !== null ? JSON.parse(localStorage.getItem(`projects`))[visibleProjectIndex].done : [];


  // const toDo = localStorage.getItem(`toDo${visibleProjectIndex}`) !==null? JSON.parse(localStorage.getItem(`toDo${visibleProjectIndex}`)) : [];
  // const doing = localStorage.getItem(`doing${visibleProjectIndex}`) !==null? JSON.parse(localStorage.getItem(`doing${visibleProjectIndex}`)) : [];
  // const done = localStorage.getItem(`done${visibleProjectIndex}`) !==null? JSON.parse(localStorage.getItem(`done${visibleProjectIndex}`)) : [];


  const [showPromt, setShowPrompt] = useState(false)
  const toggleShowPromt = () => {
    setShowPrompt(!showPromt)
  }


  const dispatch = useDispatch();

    
  const [, toDoDrop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => {
      dispatch(addToDo(item))
      dispatch(removeDone(item))
      dispatch(removeDoing(item))
      // console.log('Dropped on To Do:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const [, doingDrop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => {
      dispatch(addDoing(item))
      dispatch(removeToDo(item))
      dispatch(removeDone(item))
      // console.log('Dropped on Doing:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const [, doneDrop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => {
      dispatch(addDone(item))
      dispatch(removeDoing(item))
      dispatch(removeToDo(item))
      // console.log('Dropped on Done:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))


  // in the code below i am calling it ref1 instead of ref to that i can access the value in the State component props and then use ref property to assign the reference.

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardHeader}>
        <h3>{projects[visibleProjectIndex].name}</h3>
        <button onClick={toggleShowPromt}>+ add new task</button>
      </div>
      
      <div className={styles.board}>
        <State ref1={toDoDrop} type='To Do' list={toDo} />
        <State ref1={doingDrop} type='Doing' list={doing} />
        <State ref1={doneDrop} type='Done' list={done} />
      </div>  
      
      <PromptBox visible={showPromt} changeVisible={setShowPrompt} visibleProjectIndex={visibleProjectIndex} />
    </div>
  )
}

export default Board