import React from 'react'
import styles from './Board.module.scss'
import State from '../state/State'
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import {addTask as addToDo, removeTask as removeToDo} from '../card/toDoSlice'
import {addTask as addDoing, removeTask as removeDoing} from '../card/doingSlice'
import {addTask as addDone, removeTask as removeDone} from '../card/doneSlice'  


const Board = () => {

  const dispatch = useDispatch();

  const toDo = useSelector(state => state.toDo)
  const doing = useSelector(state => state.doing)
  const done = useSelector(state => state.done)


  // const [{isOver}, drop] = useDrop(() => ({
  //   accept: 'div',
  //   drop: (item) =>{
  //     console.log(item)},
  //   collect: (monitor) => ({
  //     isOver:  !!monitor.isOver(),
  //   }),
  // }))


    // copied code below
    
  const [, toDoDrop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => {
      dispatch(addToDo(item))
      dispatch(removeDone(item.id))
      dispatch(removeDoing(item.id))
      console.log('Dropped on To Do:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const [, doingDrop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => {
      dispatch(addDoing(item))
      dispatch(removeToDo(item.id))
      dispatch(removeDone(item.id))
      console.log('Dropped on Doing:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const [, doneDrop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => {
      dispatch(addDone(item))
      dispatch(removeDoing(item.id))
      dispatch(removeToDo(item.id))
      console.log('Dropped on Done:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

// copied code ends


  // in the code below i am calling it ref1 instead of ref to that i can access the value in the State component props and then use ref property to assign the reference.

  return (
      <div className={styles.board}>
        <State ref1={toDoDrop} type='To Do' list={toDo} />
        <State ref1={doingDrop} type='Doing' list={doing} />
        <State ref1={doneDrop} type='Done' list={done} />
      </div>  
  )
}

export default Board