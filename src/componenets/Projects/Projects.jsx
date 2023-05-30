import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Projects.module.scss'
import { addProject, removeProject, changeVisibleProject } from '../projectSlice'
import { useDispatch } from 'react-redux'
import { FaClipboardList } from 'react-icons/fa'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { toggleTheme } from '../../themeSlice'

const Projects = ({changeTheme, setShowProjectPrompt}) => {  

  const dispatch = useDispatch()

  const showProjectPrompt = () => {
    setShowProjectPrompt(true)
  }

  const nightMode = useSelector(state => state.theme.nightMode)

  const onToggle = () => {
    dispatch(toggleTheme(!nightMode))
    changeTheme(!nightMode)
  }

  const projects = useSelector(state => state.projects.projects)
  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  

  const removeProjectHandler = (id) => {
    dispatch(removeProject({projectId: id}))
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
          style={{
            backgroundColor: visibleProjectIndex===index? 'var(--color-primary)': 'transparent',
            color: visibleProjectIndex===index? '#ffffff': 'var(--main-text-color)'          
          }}
          ><FaClipboardList></FaClipboardList> {project.name} <span><BsFillTrash3Fill onClick={() => {
            return (removeProjectHandler(project.id))
          }} ></BsFillTrash3Fill></span> </li>
        })}
      </ul>
      <button onClick={showProjectPrompt}>+ Create New Board</button>

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