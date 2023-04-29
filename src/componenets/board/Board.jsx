import React from 'react'
import styles from './Board.module.scss'
import State from '../state/State'
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import { addToDo, addDoing, addDone, removeToDo, removeDoing, removeDone } from '../projectSlice'


const Board = ({projects, visibleProjectIndex}) => {


  const newTask = () => {
    
    const task = prompt('Enter task')
    const id = Math.random()

    if (task.length) {
    dispatch(addToDo({
      taskInfo: task,
      taskId: id, 
      projectIndex: 0
    }))
  }}


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
    <>
      <button onClick={newTask}>add task</button>
      <div className={styles.board}>
        <State ref1={toDoDrop} type='To Do' list={projects[visibleProjectIndex].toDo} />
        <State ref1={doingDrop} type='Doing' list={projects[visibleProjectIndex].doing} />
        <State ref1={doneDrop} type='Done' list={projects[visibleProjectIndex].done} />
      </div>  
    </>
  )
}

export default Board