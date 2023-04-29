import React from 'react'
import styles from './State.module.scss'
import CardItem from '../card/Card'
import { stateStyles } from '../../styles/localStyles'
import { Typography, List } from '@mui/material';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

// state here means what level the task is at - to do, doing or done (it is a coloumn component)

function State({ type, list, ref1 }) {
  const { BoxStyled } = stateStyles;
  return (
    <BoxStyled ref={ref1} className={styles.state}>
      <Typography variant='h3'><PlaylistAddCheckCircleRoundedIcon/>{type}</Typography>
      <List>
        {list.map(task => <CardItem key={task.id} info={task.info} id={task.id} />)}
      </List>
    </BoxStyled>
  )
}

export default State
