import React from 'react'
import styles from './Card.module.scss'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'
import { ListItem } from '@mui/material'
import { cardStyles } from '../../styles/localStyles'

const CardItem = ({ info, id }) => {

  const visibleProjectIndex = useSelector(state => state.projects.visibleProjectIndex)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'div',

    //the drop in useDrop can using this name 'item' to access the data
    item: { taskInfo: info, taskId: id, projectIndex: visibleProjectIndex },
    //this i think is to check if the element is being dragged right now
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const {ListItemStyled,} = cardStyles;

  return (
    <ListItemStyled ref={drag}>
        {info} <br />
      Some other stuff
    </ListItemStyled>
  )
}

export default CardItem
