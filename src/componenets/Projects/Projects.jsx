import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Projects.module.scss'
import { addProject, changeVisibleProject } from '../projectSlice'
import { useDispatch } from 'react-redux'

const Projects = () => {

  const projects = useSelector(state => state.projects.projects)
  const dispatch = useDispatch()

  const addProjectHandler = () => {
    const projectName = prompt('Enter project name')
    const projectId = Math.random()

    dispatch(addProject({
      projectId,
      projectName
    }))
  }

  return (
    <div className={styles.Projects}>
      <ul>
        {projects.map((project, index) => {
          return <li key={index}
          onClick={() => {
            dispatch(changeVisibleProject(index))
          } }
          >{project.name}</li>
        })}
      </ul>
      <button onClick={addProjectHandler}>Add Project</button>
    </div>
  )
}

export default Projects