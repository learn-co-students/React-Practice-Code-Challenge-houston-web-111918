import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushis)
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map( (sushi) => (
          <Sushi key={sushi.id} sushi={sushi}/>
        ))}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer