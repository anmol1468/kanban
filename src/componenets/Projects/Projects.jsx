import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Projects.module.scss'
import { addProject, changeVisibleProject } from '../projectSlice'
import { useDispatch } from 'react-redux'
import { FaClipboardList } from 'react-icons/fa'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const Projects = () => {  

  const onToggle = () => {}

  const projects = useSelector(state => state.projects.projects)
  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)
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
      <h1>Kanban</h1>
      <h3>ALL BOARDS ({projects.length})</h3>
      <ul>
        {projects.map((project, index) => {
          return <li key={index}
          onClick={() => {
            dispatch(changeVisibleProject(index))
          } }
          style={{backgroundColor: visibleProjectIndex===index? 'var(--color-primary)': 'transparent'}}
          ><FaClipboardList></FaClipboardList> {project.name}</li>
        })}
      </ul>
      <button onClick={addProjectHandler}>+ Create New Board</button>

      <div className={styles.toggle}>
        <HiOutlineMoon />
        <input onClick={onToggle} type="checkbox" id="switch" /><label for="switch">Toggle</label> 
        <HiOutlineSun />
      </div>
      {/* <button></button> */}
    </div>
  )
}

export default Projects