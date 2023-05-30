import React, { useState } from 'react'
import styles from './ProjectPromptBox.module.scss'
import { useDispatch } from 'react-redux'
import { addProject } from '../projectSlice'

const ProjectPromptBox = ({setShowProjectPrompt}) => {

  const dispatch = useDispatch()

  const [ projectTitle, setProjectTitle ] = useState('')

  const addProjectHandler = () => {
    const projectId = Math.random()

    dispatch(addProject({
      projectId,
      projectName: projectTitle
    }))

    setShowProjectPrompt(false)
  }

  const inputChangeHandler = (e) => {
    setProjectTitle(e.target.value)
  }

  return (
    <div className={styles.promptBox}>
      <div className={styles.promptBoxContainer}>
        <h6>Project Name</h6>
        <input type="text" onChange={inputChangeHandler} value={projectTitle}  />
        <div className={styles.buttons}>
          <button onClick={addProjectHandler}>Create Project</button>
          <button onClick={()=> {setShowProjectPrompt(false)}}>Go Back</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectPromptBox