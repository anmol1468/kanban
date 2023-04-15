import React from 'react'
import styles from './Card.module.scss'
import { useDrag } from 'react-dnd'

const Card = ({info, id}) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'div',

    //the drop in useDrop can using this name 'item' to access the data
    item: {info, id},
    //this i think is to check if the element is being dragged right now
    collect: (monitor) => ({
      isDragging:  !!monitor.isDragging(),
    }),
  }))

  return (
    <div ref={drag} className={styles.card}>
      {info}
    </div>
  )
}

export default Card