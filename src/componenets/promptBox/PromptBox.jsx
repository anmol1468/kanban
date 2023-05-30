import React, { useState } from 'react'
import styles from './PromptBox.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo } from '../projectSlice' 

const PromptBox = ({visible, changeVisible, visibleProjectIndex}) => {

  const dispatch = useDispatch()
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const changeTitle = (e) => {setTitle(e.target.value)}
  const changeDescription = (e) => {setDescription(e.target.value)}

  const createTask = () => {

    const id = Math.random()

    if (title.length){

    dispatch(addToDo({
      taskInfo: title,
      description: description,
      taskId: id,
      projectIndex: visibleProjectIndex
    }))}

    setDescription('')
    setTitle('')
    changeVisible(false)

  //   if (task.length) {
  //   dispatch(addToDo({
  //     taskInfo: title,
  //     description: description,
  //     taskId: id,
  //     projectIndex: visibleProjectIndex
  //   }))
  // }



  }

  return (
    <div style={{
      display: visible? 'block': 'none'
    }} className={styles.promptBox} 
    // onClick={() => { changeVisible(false)}}
    >
      <div>
        <h4>Create new task</h4>
        <div>
          <h6>Title</h6>
          <input type="text" value={title} maxLength='30' onChange={changeTitle} />
        </div>
        <div>
          <h6>Description</h6>
          <input type="text" value={description} onChange={changeDescription} />
        </div>
        <div className={styles.buttons}>
          <button onClick={createTask} >Create Task</button>
          <button onClick={
            () => { changeVisible(false)}
          }>Go back</button>
        </div>
      </div>
    </div>
  )
}

export default PromptBox