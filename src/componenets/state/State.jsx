import React from 'react'
import styles from './State.module.scss'
import Card from '../card/Card'

// state here means what level the task is at - to do, doing or done (it is a coloumn component)



function State({type, list, ref1}) {
  return (
    <div ref={ref1} className={styles.state}>
      <h3>{type}</h3>
      <ul>
        {list.map(task => <li key={task.id}><Card info={task.info} id={task.id} description={task.description} /></li> )}
      </ul>
    </div>
  )
}

export default State