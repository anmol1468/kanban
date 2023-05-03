import React, { useState } from 'react'
import styles from './Card.module.scss'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'

const Card = ({info, id, description}) => {

  const [showPopUp, setShowPopUp] = useState(false)

  const togglePopUp = () => {
    setShowPopUp(!showPopUp)
  }

  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'div',  

    //the drop in useDrop can using this name 'item' to access the data
    item: { taskInfo: info, taskId: id, projectIndex: visibleProjectIndex,
    taskDescription: description
    },
    //this i think is to check if the element is being dragged right now
    collect: (monitor) => ({
      isDragging:  !!monitor.isDragging(),
    }),
  }))

  return (
    <div ref={drag} className={styles.card} onClick={togglePopUp}>
      <h5>{info}</h5>
      <div className={styles.banner} 
      style={{display: showPopUp? 'block': 'none' }}
      >
        <div>
        <h5>{info}</h5>
        <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card